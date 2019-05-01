# frozen_string_literal: true

module Resolvers
  module Admin
    class Dashboard < Resolvers::Base
      description 'Dashboard for administrators.'

      type Types::Admin::DashboardType, null: false

      argument :date_interval, Types::DateIntervalType,
               description: 'Filter results on a date interval.',
               required:    false

      def resolve(date_interval: nil)
        ::AdministrationAnalyticsService.new(
          date_interval: date_interval
        )
      end
    end
  end
end
