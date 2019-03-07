# frozen_string_literal: true

module Addressable
  extend ActiveSupport::Concern

  included do
    has_one :address,
            as:         :addressable,
            inverse_of: :addressable,
            dependent:  :destroy

    accepts_nested_attributes_for :address

    def address_attributes=(attribute_set)
      super(attribute_set.merge(addressable: self))
    end
  end
end
