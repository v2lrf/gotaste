# frozen_string_literal: true

module Administration
  class BusinessesController < BaseController
    def index
      render locals: {
        businesses: Business.all.order(name: :asc)
      }
    end
  end
end
