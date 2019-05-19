# frozen_string_literal: true

module Resolvers
  module Business
    class Statistics < Resolvers::Base
      description 'Statistics for the businesses.'

      type Types::Business::StatisticsType, null: true

      argument :date_interval, Types::DateIntervalType,
               description: 'Filter results on a date interval.',
               required:    false

      def self.authorized?(object, context)
        super && BusinessPolicy.new(context[:current_user], object).edit?
      end

      def resolve(date_interval: nil)
        ::BusinessAnalytics.new(
          business_slug: object.slug,
          date_interval: date_interval
        )
      end
    end
  end
end
