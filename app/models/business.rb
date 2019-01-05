# frozen_string_literal: true

class Business < ApplicationRecord
  validates :name, :street_name, :street_number,
            :postal_code, :city, :latitude, :longitude,
            :business_type, presence: true

  enum business_type: {
    shop:       0,
    bar:        1,
    restaurant: 2
  }

  has_many :events,
           foreign_key: :host_id,
           inverse_of:  :host,
           dependent:   :destroy

  before_save :set_longitude_latitude_point

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

  private

  def set_longitude_latitude_point
    self.longitude_latitude = "POINT(#{longitude} #{latitude})"
  end
end
