# frozen_string_literal: true

module Mutations
  class CreateEvent < Mutations::BaseMutation
    description 'Create an event.'

    argument :business_slug, String,
             description: 'The slug of the host of the event.',
             required:    true

    argument :attributes, Types::EventInputType,
             description: "The event's attributes .",
             required:    true

    argument :address, Types::AddressInputType,
             description: 'The address of the event.',
             required:    true

    field :event, Types::EventType,
          description: 'The created event.',
          null:        true

    def ready?(**args)
      business = Business.find_by!(slug: args[:business_slug])
      event = business.events.new

      unless EventPolicy.new(current_user, event).create?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(**args)
      business = Business.find_by!(slug: args[:business_slug])
      event = business.events.create(
        args[:attributes].to_h.merge(address_attributes: args[:address].to_h)
      )

      { event: event }
    end
  end
end
