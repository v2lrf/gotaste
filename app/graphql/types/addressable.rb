# frozen_string_literal: true

module Types
  module Addressable
    include Types::BaseInterface

    description 'Types that has an address.'

    field :address, AddressType,
          description: 'Address of the object.',
          null:        false

    def address
      Loaders::RecordLoader.for(
        Address,
        column: :addressable_id,
        where:  { addressable_type: object.class.to_s }
      ).load(object.id)
    end
  end
end
