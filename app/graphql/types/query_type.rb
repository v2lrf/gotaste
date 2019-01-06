# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include Fields::Search

    field :businesses, [BusinessType],
          description: 'Wine stores or wine bars.',
          null: true

    field :viewer, UserType,
          description: 'The signed in user.',
          null: true

    def businesses
      Business.all
    end

    def viewer
      context[:current_user]
    end
  end
end
