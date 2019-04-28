# frozen_string_literal: true

FactoryBot.define do
  factory :business do
    sequence :name do |n|
      "Wine shop #{n}"
    end

    business_type { :shop }
    area

    after(:create) do |business|
      create(:address, addressable: business)
    end
  end
end
