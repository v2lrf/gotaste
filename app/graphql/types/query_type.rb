# frozen_string_literal: true

module Types
  class QueryType < Types::BaseObject
    # Add root-level fields here.
    # They will be entry points for queries on your schema.

    # TODO: remove me
    field :test_field, String, 'An example field added by the generator',
          null: false

    def test_field
      'Hello World!'
    end
  end
end
