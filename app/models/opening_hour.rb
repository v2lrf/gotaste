# frozen_string_literal: true

class OpeningHour < ApplicationRecord
  belongs_to :business

  def day_of_week
    Date::DAYNAMES[self[:day_of_week]]
  end
end
