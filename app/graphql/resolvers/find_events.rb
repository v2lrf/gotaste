# frozen_string_literal: true

module Resolvers
  class FindEvents < Resolvers::Base
    description 'Find all events.'

    type Types::EventConnectionType, null: true

    argument :when_event_begins, Types::EventBeginsEnumType,
             description: 'When the event begins.',
             required:    true

    argument :order_by, Types::EventOrderEnumType,
             description: 'How to order the results.',
             required:    true

    def resolve(when_event_begins:, order_by:)
      scope = when_event_begins == 'PAST' ? ::Event.past : ::Event.upcoming
      scope.order(order_by)
    end
  end
end
