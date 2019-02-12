# frozen_string_literal: true

class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :require_admin_in_production!
  before_action :load_session

  def execute
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?

    handle_error_in_development e
  end

  private

  def load_session
    session['init'] = true
  end

  def result
    GovinuSchema.execute(
      query,
      variables:      variables,
      context:        context,
      operation_name: operation_name
    )
  end

  def query
    params[:query]
  end

  def variables
    ensure_hash(params[:variables])
  end

  def context
    {
      session:      session,
      current_user: current_user
    }
  end

  def current_user
    # if we want to change the sign-in strategy, this is the place to do it
    return unless session[:token]

    crypt = ActiveSupport::MessageEncryptor.new(Rails.application.credentials.secret_key_base.byteslice(0..31))
    token = crypt.decrypt_and_verify session[:token]
    user_id = token.gsub('user-id:', '').to_i
    User.find_by id: user_id
  rescue ActiveSupport::MessageVerifier::InvalidSignature
    nil
  end

  def operation_name
    params[:operationName]
  end

  # Handle form data, JSON body, or a blank value
  # rubocop:disable Metrics/MethodLength
  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      if ambiguous_param.present?
        ensure_hash(JSON.parse(ambiguous_param))
      else
        {}
      end
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      raise ArgumentError, "Unexpected parameter: #{ambiguous_param}"
    end
  end
  # rubocop:enable Metrics/MethodLength

  def handle_error_in_development(error)
    logger.error error.message
    logger.error error.backtrace.join("\n")

    render json: {
      error: { message: error.message, backtrace: error.backtrace }, data: {}
    }, status: :internal_server_error
  end
end
