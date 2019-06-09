# frozen_string_literal: true

module Mutations
  class FavouriteBusiness < Mutations::BaseMutation
    description 'Favourite a business.'

    argument :business_slug, String, 'The slug of the business', required: true

    field :success, Boolean,
          description: 'Whether the business was succesfully favourited.',
          null:        false

    def authorized?(*)
      unless FavouritePolicy.new(current_user, Favourite.new).create?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(business_slug:)
      business = Business.find_by!(slug: business_slug)

      favourite = FavouriteBusinessService.new(
        business: business,
        user:     current_user
      ).call

      return { success: true } if favourite.persisted?

      raise GraphQL::ExecutionError, favourite.errors.full_messages.join(',')
    end
  end
end
