# frozen_string_literal: true

class GovinuSchema < GraphQL::Schema
  mutation(Types::MutationType)
  query(Types::QueryType)

  use GraphQL::Batch

  def self.id_from_object(object, type_definition, query_ctx)
    # Call your application's UUID method here
    # It should return a string
    GraphQL::Schema::UniqueWithinType.encode(type_definition.name, object.id)
  end

  def self.object_from_id(id, query_ctx)
    class_name, item_id = MyApp::GlobalId.decrypt(id)
    # "Post" => Post.find(item_id)
    Object.const_get(class_name).find(item_id)
  end

  def self.resolve_type(type, object, ctx)
    case object
    when Business
      Types::BusinessType
    else
      raise("Unexpected object: #{object}")
    end
  end
end
