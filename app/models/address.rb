# frozen_string_literal: true

class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  validates :addressable, :street_name, :street_number, :postal_code,
            :city, presence: true

  geocoded_by :full_address

  after_validation :geocode, if: -> { full_address_changed? }

  def full_address
    [street_name, street_number, postal_code, city].compact.join(', ')
  end

  def full_address_changed?
    street_name_changed? ||
      street_number_changed? ||
      postal_code_changed? ||
      city_changed?
  end
end
