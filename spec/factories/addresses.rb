# frozen_string_literal: true

FactoryBot.define do
  factory :address do
    association :addressable, factory: :business
    street_name   { 'Street' }
    street_number { '1' }
    postal_code   { '2000' }
    city          { 'Copenhagen' }
    latitude      { 55.6761 }
    longitude     { 12.5683 }
  end
end
