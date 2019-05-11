# frozen_string_literal: true

class BusinessAnalytics
  def initialize(business:)
    @business = business
  end

  def page_views
    Ahoy::Event.where_props(page: business_path).count
  end

  def page_visitors
    Ahoy::Event.where_props(page: business_path).distinct.pluck(:visit_id).count
  end

  private

  attr_reader :business

  def business_path
    @business_path ||= "/business/#{business.slug}"
  end
end
