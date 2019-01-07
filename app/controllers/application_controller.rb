# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :require_admin_in_production!, unless: :devise_controller?

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: %i[first_name last_name])
  end

  def require_admin_in_production!
    return unless Rails.env.production?
    return if current_user&.admin?

    render 'landing/_coming_soon'
  end
end
