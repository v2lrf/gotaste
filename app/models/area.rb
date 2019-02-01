# frozen_string_literal: true

class Area < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  acts_as_nested_set

  validates :name, :longitude_latitude, presence: true

  class << self
    def closest_within(latitude:, longitude:, distance: 1000)
      where(
        "ST_DWithin(longitude_latitude, 'POINT(? ?)', ?)",
        longitude, latitude, distance
      ).order(
        Arel.sql(
          "ST_Distance(longitude_latitude, 'POINT(#{longitude} #{latitude})')"
        )
      )
    end
  end
end
