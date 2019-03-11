# frozen_string_literal: true

module Admin
  class BusinessesController < Admin::ApplicationController
    def find_resource(param)
      Business.find_by!(slug: param)
    end
  end
end
