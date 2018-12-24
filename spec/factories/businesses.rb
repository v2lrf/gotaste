# frozen_string_literal: true

FactoryBot.define do
  factory :business do
    name          { 'Wine Shop' }
    street_name   { 'Street' }
    street_number { '1' }
    postal_code   { '2000' }
    city          { 'Copenhagen' }
    latitude      { 55.6761 }
    longitude     { 12.5683 }
    business_type { :shop }
  end
end
