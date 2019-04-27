# frozen_string_literal: true

class AfterSignInPathService
  def initialize(user:, admin_path:, business_user_path:, user_path:)
    @user               = user
    @admin_path         = admin_path
    @business_user_path = business_user_path
    @user_path          = user_path
  end

  def call
    return admin_path if user.admin?

    return business_user_path if user_is_a_business_employee?

    user_path
  end

  private

  attr_reader :user, :admin_path, :business_user_path, :user_path

  def user_is_a_business_employee?
    user.businesses.any?
  end
end
