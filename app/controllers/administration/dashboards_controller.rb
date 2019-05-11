# frozen_string_literal: true

module Administration
  class DashboardsController < BaseController
    def index
      render locals: {
        total_page_views:          analytics.page_views,
        total_page_visitors:       analytics.page_visitors,
        total_page_clicks:         analytics.page_clicks,
        total_business_page_views: analytics.business_page_views,
        total_event_page_views:    analytics.event_page_views
      }
    end

    private

    def analytics
      @analytics ||= AdministrationAnalyticsService.new
    end
  end
end
