# frozen_string_literal: true

class Address < ApplicationRecord
  belongs_to :addressable, polymorphic: true

  before_save :set_coordinate

  private

  def set_coordinate
    self.coordinate = "POINT(#{longitude} #{latitude})"
  end
end
