# frozen_string_literal: true

class EventAnalytics
  EVENT_PAGE_VIEW = 'event_page_view'

  def initialize(event_slug:)
    @event_slug = event_slug
  end

  def page_views
    base_scope
  end

  def page_visits
    base_scope.distinct.pluck(:visit_id)
  end

  private

  attr_reader :event_slug

  def base_scope
    @base_scope ||= Ahoy::Event.where(name: EVENT_PAGE_VIEW)
                               .where_props(slug: event_slug)
  end
end
