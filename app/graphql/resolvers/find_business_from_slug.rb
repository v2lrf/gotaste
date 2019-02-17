# frozen_string_literal: true

module Resolvers
  class FindBusinessFromSlug < Resolvers::Base
    description "Find a business by it's slug."
    type Types::BusinessType, null: true

    argument :slug, String, 'Slug of the business.', required: true

    def resolve(slug:)
      Business.friendly.find(slug)
    end
  end
end
