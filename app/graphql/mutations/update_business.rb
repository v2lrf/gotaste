# frozen_string_literal: true

module Mutations
  class UpdateBusiness < Mutations::BaseMutation
    argument :business_slug, String, 'The slug of the business', required: true

    argument :attributes, Types::BusinessAttributesType,
             description: 'The attributes that can be updated.',
             required:    true

    argument :address, Types::AddressInputType,
             description: 'The address of the business.',
             required:    true

    field :business, Types::BusinessType,
          description: 'The updated business.',
          null:        false

    def ready?(**args)
      business = Business.find_by!(slug: args[:business_slug])

      unless BusinessPolicy.new(current_user, business).update?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(**args)
      business = Business.find_by!(slug: args[:business_slug])
      business.update(
        args[:attributes].to_h.merge(address_attributes: args[:address].to_h)
      )

      { business: business }
    end
  end
end
