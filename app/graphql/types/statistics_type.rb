# frozen_string_literal: true

module Types
  class StatisticsType < Types::BaseObject
    field :page_visits, StatsResult,
          description: 'Page visits in the given time period.',
          null:        false

    field :page_views, StatsResult,
          description: 'Page views in the given time period.',
          null:        false
  end
end
