# frozen_string_literal: true

class Area < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, presence: true

  belongs_to :parent, class_name: 'Area', optional: true
  has_many :children,
           class_name:  'Area',
           foreign_key: 'parent_id',
           dependent:   :restrict_with_exception,
           inverse_of:  :parent

  has_many :businesses, dependent: :restrict_with_exception

  geocoded_by :name
  after_validation :geocode
end
