# frozen_string_literal: true

class AdministrationAnalyticsService
  def initialize(date_interval: nil)
    @date_interval = date_interval
  end

  def page_views
    page_view_scope.count
  end

  def page_visitors
    page_view_scope.distinct.pluck(:visit_id).count
  end

  def page_clicks
    page_interactions_scope.count
  end

  def business_page_views
    base_scope.where(name: 'business_page_view').count
  end

  def event_page_views
    base_scope.where(name: 'event_page_view').count
  end

  private

  attr_reader :date_interval

  def page_view_scope
    @page_view_scope ||= base_scope.where(name: '$view')
  end

  def page_interactions_scope
    @page_interactions_scope ||= base_scope.where(name: '$click')
  end

  def base_scope
    if date_interval.present?
      Ahoy::Event.where(time: date_interval)
    else
      Ahoy::Event
    end
  end
end
