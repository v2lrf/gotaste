# frozen_string_literal: true

module PrivateRoom
  module Dashboards
    class IndexView
      def initialize(business_analytics:)
        @business_analytics = business_analytics
      end

      def total_page_views
        business_analytics.page_views
      end

      def total_visitors
        business_analytics.page_visitors
      end

      private

      attr_reader :business_analytics
    end
  end
end
