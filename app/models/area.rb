# frozen_string_literal: true

class Area < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  acts_as_nested_set

  validates :name, :longitude_latitude, presence: true
end
