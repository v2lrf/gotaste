# frozen_string_literal: true

class WelcomeController < ApplicationController
  def index
    redirect_to signed_in_path
  end

  private

  def signed_in_path
    AfterSignInPathService.new(
      user:               current_user,
      admin_path:         admin_root_path,
      business_user_path: private_room_root_path,
      user_path:          AppConfig.main_front_page
    ).call
  end
end
