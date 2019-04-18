# frozen_string_literal: true

module Admin
  class BusinessesController < Admin::ApplicationController
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
