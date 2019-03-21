# frozen_string_literal: true

class Area < ApplicationRecord
  extend FriendlyId
  friendly_id :name, use: :slugged

  validates :name, :longitude_latitude, presence: true

  belongs_to :parent, class_name: 'Area', optional: true
  has_many :children,
           class_name:  'Area',
           foreign_key: 'parent_id',
           dependent:   :restrict_with_exception,
           inverse_of:  :parent

  has_many :businesses, dependent: :restrict_with_exception

  class << self
    def closest_within(latitude:, longitude:, distance: 1000)
      where(
        "ST_DWithin(longitude_latitude, 'POINT(? ?)', ?)",
        longitude, latitude, distance
      ).order(
        Arel.sql(
          "ST_Distance(longitude_latitude, 'POINT(#{longitude} #{latitude})')"
        )
      )
    end
  end
end
