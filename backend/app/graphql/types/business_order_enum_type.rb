# frozen_string_literal: true

module Types
  class BusinessOrderEnumType < Types::BaseEnum
    value 'NAME_ASC',
          description: 'Order by the business name in an ascending order.',
          value:       'name ASC'

    value 'NAME_DESC',
          description: 'Order by the business name in an descending order.',
          value:       'name DESC'
  end
end
