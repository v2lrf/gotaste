# frozen_string_literal: true

module Types
  class EventConnectionType < GraphQL::Types::Relay::BaseConnection
    edge_type(EventEdgeType)

    field :total_count, Integer,
          description: 'The total number of events connected to the object.',
          null:        false

    def total_count
      object.nodes.size
    end
  end
end
