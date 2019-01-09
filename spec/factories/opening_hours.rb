# frozen_string_literal: true

FactoryBot.define do
  factory :opening_hour do
    business
    day_of_week { 1 }
    open { '09:00' }
    close { '17:00' }
  end
end
