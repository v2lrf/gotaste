# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit

  before_action :set_locale
  before_action :authenticate_user!
  before_action :set_raven_context

  protected

  def after_sign_in_path_for(user)
    AfterSignInPathService.new(
      user:               user,
      admin_path:         admin_root_path,
      business_user_path: private_room_root_path,
      user_path:          AppConfig.main_front_page
    ).call
  end

  private

  def set_locale
    I18n.locale = :da
  end

  def set_raven_context
    Raven.user_context(id: session[:current_user_id])
    Raven.extra_context(params: params.to_unsafe_h, url: request.url)
  end
end
