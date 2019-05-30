# frozen_string_literal: true

FactoryBot.define do
  factory :favourite do
    user
    business
  end
end
