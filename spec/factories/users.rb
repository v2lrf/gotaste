# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { 'Jens' }
    last_name  { 'Hansen' }

    sequence :email do |n|
      "person#{n}@example.com"
    end

    password { 'superSecretPassword' }

    trait :admin do
      role { :admin }
    end

    trait :business_owner do
      role { :owner }
    end
  end
end
