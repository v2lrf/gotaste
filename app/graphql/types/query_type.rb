# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    field :area_search, resolver: Resolvers::AreaSearch
    field :business, resolver: Resolvers::FindBusinessFromSlug
    field :event, resolver: Resolvers::FindEventFromSlug
    field :search, resolver: Resolvers::Search
    field :viewer, resolver: Resolvers::Viewer
  end
end
