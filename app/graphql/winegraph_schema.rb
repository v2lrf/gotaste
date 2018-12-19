# frozen_string_literal: true

class WinegraphSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)
end
