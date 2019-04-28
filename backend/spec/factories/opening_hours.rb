# frozen_string_literal: true

FactoryBot.define do
  factory :opening_hour do
    business
    day_of_week { 1 }

    trait :open do
      open        { '09:00' }
      close       { '17:00' }
    end

    trait :closed do
      open        { nil }
      close       { nil }
    end
  end
end
