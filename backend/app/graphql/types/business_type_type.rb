# frozen_string_literal: true

module Types
  class BusinessTypeType < Types::BaseEnum
    value 'SHOP', 'Wine shop.', value: 'shop'
    value 'BAR', 'Wine bar.', value: 'bar'
    value 'RESTAURANT', 'A restaurant.', value: 'restaurant'
  end
end
