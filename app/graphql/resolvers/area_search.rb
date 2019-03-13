# frozen_string_literal: true

module Resolvers
  class AreaSearch < Resolvers::Base
    description 'Search for areas within'\
                ' a distance of a given latitude and longitude.'

    type Types::AreaType.connection_type, null: true

    DEFALULT_DISTANCE_IN_METERS = 1000

    argument :latitude, Float,
             description: 'The WGS84 latitude of the area in decimal degress.'\
                          'Must be between ­-90 and +90.',
             required:    true

    argument :longitude,
             Float,
             description: 'The WGS84 longitude of the area in decimal degress.'\
                          'Must be between ­-90 and +90.',
             required:    true

    argument :distance,
             Integer,
             description: 'Distance in meters from the point.',
             required:    false

    def resolve(latitude:, longitude:, distance: DEFALULT_DISTANCE_IN_METERS)
      ::Area.closest_within(
        latitude:  latitude,
        longitude: longitude,
        distance:  distance
      )
    end
  end
end
