# frozen_string_literal: true

FactoryBot.define do
  factory :event do
    title { 'Wine Event' }
    association :host, factory: :business
    begins_at { '2019-01-02 17:03:46' }
  end
end
