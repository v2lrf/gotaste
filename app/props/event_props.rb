# frozen_string_literal: true

class EventProps
  def self.for(event)
    {
      title:     event.title,
      slug:      event.slug,
      date:      event.date,
      begins_at: event.begins_at,
      ends_at:   event.ends_at
    }
  end
end
