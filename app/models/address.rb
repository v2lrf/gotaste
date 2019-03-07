# frozen_string_literal: true

class Address < ApplicationRecord
  validates :street_name, :street_number, :postal_code,
            :city, :latitude, :longitude, presence: true

  belongs_to :addressable, polymorphic: true

  before_save :set_coordinate

  class << self
    def closest_within(latitude:, longitude:, distance: 1000)
      where(
        "ST_DWithin(coordinate, 'POINT(? ?)', ?)",
        longitude, latitude, distance
      ).order(
        Arel.sql(
          "ST_Distance(coordinate, 'POINT(#{longitude} #{latitude})')"
        )
      )
    end
  end

  private

  def set_coordinate
    self.coordinate = "POINT(#{longitude} #{latitude})"
  end
end
