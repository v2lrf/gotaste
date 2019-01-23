# frozen_string_literal: true

class EventsShow
  def initialize(slug:)
    @slug = slug
  end

  def props
    {
      event: EventProps.for(event)
    }
  end

  private

  attr_reader :slug

  def event
    Event.friendly.find(slug)
  end
end
