# frozen_string_literal: true

module PrivateRoom
  class BaseController < ApplicationController
    before_action :set_admin_business_id!
    before_action :authenticate!

    layout 'private_room'

    def current_business
      @current_business ||= admin_business || user_business
    end
    helper_method :current_business

    private

    def set_admin_business_id!
      return if params[:admin_business_id].blank?

      session[:admin_business_id] = params[:admin_business_id]
    end

    def authenticate!
      head :not_found unless current_business&.present?
    end

    def admin_business
      return unless current_user&.admin?

      return Business.find(admin_business_id) if admin_business_id.present?

      nil
    end

    def user_business
      @user_business ||= current_user&.businesses&.first
    end

    def admin_business_id
      @admin_business_id ||= session[:admin_business_id]
    end
  end
end
