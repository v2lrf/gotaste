# frozen_string_literal: true

class OpeningHour < ApplicationRecord
  belongs_to :business

  def day_of_week
    Date::DAYNAMES[self[:day_of_week]]
  end

  def open
    format_time(self[:open])
  end

  def close
    format_time(self[:close])
  end

  private

  def format_time(time)
    time&.strftime('%H:%M')
  end
end
