# frozen_string_literal: true

module PrivateRoom
  class DashboardsController < BaseController
    def index
      view_object = PrivateRoom::Dashboards::IndexView.new(
        business_analytics: BusinessAnalytics.new(business: current_business)
      )

      render locals: {
        total_page_views:      view_object.total_page_views,
        total_unique_visitors: view_object.total_visitors,
        total_interactions:    view_object.total_page_views
      }
    end
  end
end
