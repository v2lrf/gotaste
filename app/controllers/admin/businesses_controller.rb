# frozen_string_literal: true

module Admin
  class BusinessesController < Admin::ApplicationController
    before_action :set_default_params, only: :index

    def index
      super
    end

    def new
      resource = resource_class.new
      resource.opening_hours.build(opening_hour_days)

      authorize_resource(resource)
      render locals: {
        page: Administrate::Page::Form.new(dashboard, resource)
      }
    end

    def find_resource(param)
      Business.find_by!(slug: param)
    end

    private

    def set_default_params
      resource_params = params.fetch(resource_name, {})
      order = resource_params.fetch(:order, 'name')
      direction = resource_params.fetch(:direction, 'asc')
      params[resource_name] = resource_params.merge(
        order:     order,
        direction: direction
      )
    end

    def opening_hour_days
      [
        { day_of_week: 'Monday' },
        { day_of_week: 'Tuesday' },
        { day_of_week: 'Wednesday' },
        { day_of_week: 'Thursday' },
        { day_of_week: 'Friday' },
        { day_of_week: 'Saturday' },
        { day_of_week: 'Sunday' }
      ]
    end
  end
end
