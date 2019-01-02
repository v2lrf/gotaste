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
end
