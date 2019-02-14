# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :first_name, String,
          null:        false,
          description: '_First name_ of the user.'
  end
end
