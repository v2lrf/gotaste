# frozen_string_literal: true

class BusinessesShow
  def initialize(slug:)
    @slug = slug
  end

  def props
    {
      business: BusinessProps.for(business)
    }
  end

  private

  attr_reader :slug

  def business
    @business ||= Business.friendly.find(slug)
  end
end
