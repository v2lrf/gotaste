# frozen_string_literal: true

module Resolvers
  class FindEventFromSlug < Resolvers::Base
    description "Find an event by it's slug."
    type Types::EventType, null: true

    argument :slug, String, 'Slug of the event.', required: true

    def resolve(slug:)
      ::Event.friendly.find(slug)
    end
  end
end
