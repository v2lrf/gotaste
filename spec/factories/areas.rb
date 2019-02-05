# frozen_string_literal: true

FactoryBot.define do
  factory :area do
    name { 'København' }
    longitude_latitude { 'POINT(12.56553 55.67594)' }
  end
end
