# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :businesses, [BusinessType],
          description: 'Wine stores or wine bars.',
          null: true

    def businesses
      Business.all
    end
  end
end
