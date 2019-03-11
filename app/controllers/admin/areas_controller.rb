# frozen_string_literal: true

module Admin
  class AreasController < Admin::ApplicationController
    def find_resource(param)
      Area.find_by!(slug: param)
    end
  end
end
