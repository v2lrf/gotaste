# frozen_string_literal: true

module Mutations
  class UpdateOpeningHours < Mutations::BaseMutation
    description 'Updates the opening hours for a business.'

    argument :business_slug, String, 'The slug of the business', required: true
    argument :opening_hours, [Types::OpeningHourInputType],
             description: 'The opening hours of the business.',
             required:    true

    field :opening_hours, [Types::OpeningHourType],
          description: 'The updated opening hours of the business.',
          null:        false

    def authorized?(**args)
      business = Business.find_by!(slug: args[:business_slug])

      unless BusinessPolicy.new(current_user, business).update?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(**args)
      business = Business.find_by!(slug: args[:business_slug])
      opening_hours = args[:opening_hours].map(&:to_h)

      business.update(opening_hours_attributes: opening_hours)

      {
        opening_hours: Loaders::ForeignKeyLoader.for(
          ::OpeningHour, :business_id
        ).load([business.id])
      }
    end
  end
end
