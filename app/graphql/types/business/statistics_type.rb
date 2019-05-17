# frozen_string_literal: true

module Types
  module Business
    class StatisticsType < Types::BaseObject
      field :page_visits, Types::Business::StatsResult,
            description: 'Page visits in the given time period.',
            null:        false

      field :page_views, Types::Business::StatsResult,
            description: 'Page views in the given time period.',
            null:        false
    end
  end
end
