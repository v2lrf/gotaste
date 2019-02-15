# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :short_name, String,
          null:        false,
          description: '_First name_ and the initial of the _last name_.'
  end
end
