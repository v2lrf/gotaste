# frozen_string_literal: true

class Business < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, :street_name, :street_number,
            :postal_code, :city, :latitude, :longitude,
            :business_type, presence: true

  enum business_type: {
    shop:       0,
    bar:        1,
    restaurant: 2
  }

  belongs_to :area

  has_many :events,
           foreign_key: :host_id,
           inverse_of:  :host,
           dependent:   :destroy

  has_many :opening_hours, dependent: :destroy
  has_one :address,
          as:         :addressable,
          inverse_of: :addressable,
          dependent:  :destroy

  def logo_id
    Logo.new(business_logo_id: self[:logo_id]).id
  end

  def hero_image_id
    HeroImage.new(hero_image_id: self[:hero_image_id]).id
  end
end
