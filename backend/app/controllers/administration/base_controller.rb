# frozen_string_literal: true

module Administration
  class BaseController < ApplicationController
    before_action :require_admin!

    layout 'administration'

    private

    def require_admin!
      head :not_found unless current_user.admin?
    end
  end
end
