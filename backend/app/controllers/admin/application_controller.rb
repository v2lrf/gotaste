# frozen_string_literal: true

module Admin
  class ApplicationController < Administrate::ApplicationController
    before_action :authenticate_admin

    def authenticate_admin
      head :not_found unless current_user&.admin?
    end
  end
end
