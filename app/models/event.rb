# frozen_string_literal: true

class Event < ApplicationRecord
  validates :title, :begins_at, presence: true

  belongs_to :host, class_name: 'Business', inverse_of: :events
end
