# frozen_string_literal: true

module Fields
  module AreaSearch
    def self.included(child_class)
      child_class.field(
        :area_search, Types::AreaType.connection_type, null: true
      ) do
        description DESCRIPTION[:search_field]

        argument :latitude, Float,
                 description: DESCRIPTION[:latitude],
                 required:    true

        argument :longitude,
                 Float,
                 description: DESCRIPTION[:longitude],
                 required:    true

        argument :distance,
                 Integer,
                 description: DESCRIPTION[:distance],
                 required:    false
      end
    end

    def area_search(latitude:, longitude:, distance: 1000)
      Area.closest_within(
        latitude:  latitude,
        longitude: longitude,
        distance:  distance
      )
    end

    DESCRIPTION = {
      search_field: 'Search for a areas within a distance
        of a given latitude and longitude.',
      latitude:     'The WGS84 latitude of the area in decimal
        degrees. Must be between ­-90 and +90.',
      longitude:    'The WGS84 longitude of the area in decimal
        degrees. Must be between ­-90 and +90',
      distance:     'Distance in meters from the point.'
    }.freeze
  end
end
