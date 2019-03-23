# frozen_string_literal: true

class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  validates :addressable, :street_name, :street_number, :postal_code,
            :city, :latitude, :longitude, presence: true

  geocoded_by :full_address
  after_validation :geocode

  def full_address
    [street_name, street_number, postal_code, city].compact.join(', ')
  end
end
