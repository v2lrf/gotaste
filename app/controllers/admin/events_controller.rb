# frozen_string_literal: true

module Admin
  class EventsController < Admin::ApplicationController
    def find_resource(param)
      Event.find_by!(slug: param)
    end
  end
end
