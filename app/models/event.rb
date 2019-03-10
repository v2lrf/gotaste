# frozen_string_literal: true

class Event < ApplicationRecord
  extend FriendlyId
  include Addressable

  friendly_id :generate_slug, use: :slugged

  validates :name, :begins_at, presence: true

  belongs_to :host, class_name: 'Business', inverse_of: :events

  scope :upcoming, -> { where('begins_at > ?', Time.current) }
  scope :past,     -> { where('begins_at <= ?', Time.current) }

  def date
    begins_at.to_date
  end

  private

  def generate_slug
    "#{date}-#{name}"
  end
end
