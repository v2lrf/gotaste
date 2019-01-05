# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :businesses, [BusinessType],
          description: 'Wine stores or wine bars.',
          null: true

    field :viewer, UserType,
          description: 'The signed in user.',
          null: true

    field :search, [BusinessType], null: true do
      description(
        'Search for a businesses with a distance of latitude and longitude.'
      )

      argument :latitude,
               Float,
               description: '_Latitude_ you want to find businesses near.',
               required:    true

      argument :longitude,
               Float,
               description: '_Longitude_ you want to find businesses near.',
               required:    true

      argument :distance,
               Integer,
               description: 'Distance in meters from the point.',
               required:    false
    end

    def businesses
      Business.all
    end

    def viewer
      context[:current_user]
    end

    def search(latitude:, longitude:, distance: 1000)
      Business.closest_within(
        latitude:  latitude,
        longitude: longitude,
        distance:  distance
      )
    end
  end
end
