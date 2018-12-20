# frozen_string_literal: true

class GraphqlController < ApplicationController
  skip_before_action :verify_authenticity_token

  def execute
    render json: result
  rescue StandardError => e
    raise e unless Rails.env.development?

    handle_error_in_development e
  end

  private

  def result
    WinegraphSchema.execute(
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
    {}
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
