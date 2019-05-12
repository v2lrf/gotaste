# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :role, RoleType,
          null:        false,
          description: 'The role of the user.'

    field :short_name, String,
          null:        false,
          description: '_First name_ and the initial of the _last name_.'

    field :businesses, BusinessType.connection_type,
          null:        true,
          description: 'Businesses the user is associated with.'
  end
end
