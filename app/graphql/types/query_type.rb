# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    include Fields::BusinessSearch
    include Fields::AreaSearch

    field :business, BusinessType,
          description: "Find a business by it's slug.",
          null:        true do

      argument :slug, String,
               description: 'Slug of the business.',
               required:    true
    end

    field :viewer, UserType,
          description: 'The signed in user.',
          null:        true

    def business(slug:)
      Business.friendly.find(slug)
    end

    def viewer
      context[:current_user]
    end
  end
end
