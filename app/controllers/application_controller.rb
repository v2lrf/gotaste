# frozen_string_literal: true

class ApplicationController < ActionController::Base
  before_action :set_locale

  protected

  def after_sign_in_path_for(user)
    AfterSignInPathService.new(
      user:               user,
      admin_path:         admin_root_path,
      business_user_path: private_room_root_path,
      user_path:          root_path
    ).call
  end

  private

  def set_locale
    I18n.locale = :da
  end
end
