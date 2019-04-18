# frozen_string_literal: true

class Business < ApplicationRecord
  extend FriendlyId

  friendly_id :name, use: :slugged

  validates :name, :business_type, presence: true

  enum business_type: {
    shop:       0,
    bar:        1,
    restaurant: 2
  }

  belongs_to :area

  has_one :address,
          as:         :addressable,
          inverse_of: :addressable,
          dependent:  :destroy

  has_many :events,
           foreign_key: :host_id,
           inverse_of:  :host,
           dependent:   :destroy

  has_many :opening_hours, dependent: :destroy
  has_one_attached :logo
  has_one_attached :hero_image

  accepts_nested_attributes_for :address, :opening_hours

  def full_logo_id
    key = logo.attached? ? logo.key : nil
    Logo.new(business_logo_id: key).id
  end

  def full_hero_image_id
    key = hero_image.attached? ? hero_image.key : nil
    HeroImage.new(hero_image_id: key).id
  end

  def open_now?
    opening_hours
      .where(day_of_week: Time.zone.now.wday)
      .where('? BETWEEN open AND close', Time.zone.now).any?
  end
end
