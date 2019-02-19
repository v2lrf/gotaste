# frozen_string_literal: true

class GovinuSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  use GraphQL::Execution::Interpreter
  use GraphQL::Analysis::AST
  use GraphQL::Batch
  use ApolloTracing.new

  def self.id_from_object(object, type_definition, _query_ctx)
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, _query_ctx)
    type_name, item_id = GraphQL::Schema::UniqueWithinType.decode(id)
    Object.const_get(type_name).find(item_id)
  end
end

GraphQL::Errors.configure(GovinuSchema) do
  rescue_from ActiveRecord::RecordNotFound do
    nil
  end
end
