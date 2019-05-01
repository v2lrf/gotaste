# frozen_string_literal: true

module Types
  class RoleType < Types::BaseEnum
    value 'USER', 'Regular user.', value: 'user'
    value 'OWNER', 'Wine bar/wine shop owner. ', value: 'owner'
    value 'ADMIN', 'Admin user.', value: 'admin'
  end
end
