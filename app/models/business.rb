# frozen_string_literal: true

class Business < ApplicationRecord
  validates :name, :street_name, :street_number,
            :postal_code, :city, :latitude, :longitude, presence: true
end
