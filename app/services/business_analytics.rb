# frozen_string_literal: true

class BusinessAnalytics
  BUSINESS_PAGE_VIEW = 'business_page_view'

  def initialize(business_slug:, date_interval:)
    @business_slug = business_slug
    @date_interval = date_interval
  end

  def page_views
    scope
  end

  def page_visits
    scope.distinct.pluck(:visit_id)
  end

  private

  attr_reader :business_slug, :date_interval

  def scope
    if date_interval.present?
      base_scope.where(time: date_interval)
    else
      base_scope
    end
  end

  def base_scope
    @base_scope ||= Ahoy::Event.where(name: BUSINESS_PAGE_VIEW)
                               .where_props(slug: business_slug)
  end
end
