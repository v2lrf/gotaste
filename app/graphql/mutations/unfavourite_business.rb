# frozen_string_literal: true

module Mutations
  class UnfavouriteBusiness < Mutations::BaseMutation
    description 'Unfavourite a business.'

    argument :business_slug, String, 'The slug of the business', required: true

    field :success, Boolean,
          description: 'Whether the business was succesfully unfavourited.',
          null:        false

    def authorized?(business_slug:)
      business = Business.find_by!(slug: business_slug)

      favourite = if current_user.present?
                    current_user.favourites.find_by!(business: business)
                  end

      unless FavouritePolicy.new(current_user, favourite).destroy?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(business_slug:)
      business = Business.find_by!(slug: business_slug)

      UnfavouriteBusinessService.new(
        business: business,
        user:     current_user
      ).call

      { success: true }
    end
  end
end
