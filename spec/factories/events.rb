# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    name        { 'Wine Event' }
    association :host, factory: :business
    begins_at   { Date.tomorrow.in_time_zone.change(hour: 20) }
  end
end
