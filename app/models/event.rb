# frozen_string_literal: true

class Event < ApplicationRecord
  extend FriendlyId
  friendly_id :generate_slug, use: :slugged

  validates :name, :begins_at, presence: true

  belongs_to :host, class_name: 'Business', inverse_of: :events
  has_one :address,
          as:         :addressable,
          inverse_of: :addressable,
          dependent:  :destroy

  private

  def generate_slug
    "#{date}-#{name}"
  end
end
