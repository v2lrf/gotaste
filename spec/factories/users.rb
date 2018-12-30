# frozen_string_literal: true

FactoryBot.define do
  factory :user do
    first_name { 'Jens' }
    last_name  { 'Hansen' }
    email      { 'jenshansen@example.com' }
    password   { 'superSecretPassword' }
  end
end
