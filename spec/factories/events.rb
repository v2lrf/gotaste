# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    name        { 'Wine Event' }
    association :host, factory: :business
    begins_at   { Date.tomorrow.in_time_zone.change(hour: 20) }
    price       { 150.00 }

    trait :with_hero_image do
      after(:create) do |event, _|
        event.hero_image.attach(
          io:       File.open('spec/support/images/gotaste.png'),
          filename: 'gotaste'
        )
      end
    end
  end
end
