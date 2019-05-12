# frozen_string_literal: true

module Types
  module Admin
    class DashboardType < Types::BaseObject
      def self.visible?(context)
        super && context[:current_user]&.admin?
      end

      field :page_views, Integer,
            description: 'Total number of page views.',
            null:        false

      field :page_visitors, Integer,
            description: 'Total number of page visitors.',
            null:        false

      field :page_clicks, Integer,
            description: 'Total number of clicks on pages.',
            null:        false

      field :business_page_views, Integer,
            description: 'The total number of business page views.',
            null:        false

      field :event_page_views, Integer,
            description: 'The total number of event page views.',
            null:        false
    end
  end
end
