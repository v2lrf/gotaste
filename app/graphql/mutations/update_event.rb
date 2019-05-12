# frozen_string_literal: true

module Mutations
  class UpdateEvent < Mutations::BaseMutation
    description 'Updates an event.'

    argument :event_slug, String,
             description: 'The slug of event.',
             required:    true

    argument :attributes, Types::EventInputType,
             description: "The event's attributes .",
             required:    true

    argument :address, Types::AddressInputType,
             description: 'The address of the event.',
             required:    true

    field :event, Types::EventType,
          description: 'The updated event.',
          null:        true

    def ready?(**args)
      event = Event.find_by!(slug: args[:event_slug])

      unless EventPolicy.new(current_user, event).update?
        raise GraphQL::ExecutionError, 'Not permitted.'
      end

      true
    end

    def resolve(**args)
      event = Event.find_by!(slug: args[:event_slug])

      event.update(
        args[:attributes].merge(address_attributes: args[:address])
      )

      { event: event }
    end
  end
end
