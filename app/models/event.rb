# frozen_string_literal: true

class Event < ApplicationRecord
  extend FriendlyId
  friendly_id :generate_slug, use: :slugged

  validates :title, :begins_at, presence: true

  belongs_to :host, class_name: 'Business', inverse_of: :events

  private

  def generate_slug
    "#{date}-#{title}"
  end
end
