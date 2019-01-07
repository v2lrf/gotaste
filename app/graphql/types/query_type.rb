# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include Fields::BusinessSearch

    field :businesses, [BusinessType],
          description: 'Wine stores or wine bars.',
          null: true

    field :business, BusinessType, "Find a business by it's ID.", null: true do
      argument :id, ID,
               description: 'ID of the business',
               required:    true
    end

    field :viewer, UserType,
          description: 'The signed in user.',
          null: true

    def business(id:)
      GovinuSchema.object_from_id(id, nil)
    end

    def businesses
      Business.all
    end

    def viewer
      context[:current_user]
    end
  end
end
