# frozen_string_literal: true

class Event < ApplicationRecord
  extend FriendlyId
  include Addressable

  friendly_id :generate_slug, use: :slugged

  validates :name, :begins_at, presence: true
  validates :price, presence: true, numericality: true

  belongs_to :host, class_name: 'Business', inverse_of: :events
  has_one_attached :hero_image

  scope :upcoming, -> { where('begins_at > ?', Time.current) }
  scope :past,     -> { where('begins_at <= ?', Time.current) }

  def hero_image_id
    hero_image.attached? ? hero_image.key : nil
  end

  def date
    begins_at.to_date
  end

  private

  def generate_slug
    "#{date}-#{name}"
  end
end
