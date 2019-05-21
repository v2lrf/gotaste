# frozen_string_literal: true

module Types
  class StatsResult < Types::BaseObject
    field :total_count, Integer,
          description: 'Total number of results.',
          null:        false,
          method:      :count
  end
end
