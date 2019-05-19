# frozen_string_literal: true

module Resolvers
  module Event
    class Statistics < Resolvers::Base
      description 'Statistics for the event.'

      type Types::StatisticsType, null: true

      def self.authorized?(object, context)
        super && EventPolicy.new(context[:current_user], object).edit?
      end

      def resolve
        ::EventAnalytics.new(event_slug: object.slug)
      end
    end
  end
end
