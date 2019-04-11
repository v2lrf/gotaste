# frozen_string_literal: true

module Admin
  class EventsController < Admin::ApplicationController
    before_action :copy_address_from_business, only: %i[create update]

    def create
      super
    end

    def update
      super
    end

    def find_resource(param)
      Event.find_by!(slug: param)
    end

    private

    attr_reader :business

    def copy_address_from_business
      return unless host_present? && same_address_as_host?

      params[:event][:address_attributes] = host.address.attributes.slice(
        'street_name', 'street_number', 'postal_code', 'city'
      )
    end

    def host
      Business.find(params[:event][:host_id])
    end

    def host_present?
      params[:event][:host_id].present?
    end

    def same_address_as_host?
      params[:event][:same_address_as_host] == '1'
    end
  end
end
