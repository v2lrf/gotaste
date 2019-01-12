# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :require_admin_in_production!, unless: :devise_controller?

  private

  def require_admin_in_production!
    return unless Rails.env.production?
    return if current_user&.admin?

    render 'landing/_coming_soon'
  end
end
