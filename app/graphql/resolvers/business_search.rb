# frozen_string_literal: true

module Resolvers
  class BusinessSearch < Resolvers::Base
    description 'Search for businesses within'\
                ' a distance of a given latitude and longitude.'

    type Types::BusinessType.connection_type, null: true

    DEFALULT_DISTANCE_IN_METERS = 1000

    argument :latitude, Float,
             description: 'The WGS84 latitude of the business in decimal'\
                          'degress. Must be between ­-90 and +90.',
             required:    true

    argument :longitude,
             Float,
             description: 'The WGS84 longitude of the business in decimal'\
                          'degress. Must be between ­-90 and +90.',
             required:    true

    argument :distance,
             Integer,
             description: 'Distance in meters from the point.',
             required:    false

    def resolve(latitude:, longitude:, distance: DEFALULT_DISTANCE_IN_METERS)
      Business.closest_within(
        latitude:  latitude,
        longitude: longitude,
        distance:  distance
      )
    end
  end
end
