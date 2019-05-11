# frozen_string_literal: true

module Resolvers
  class Businesses < Resolvers::Base
    description 'Get businesses.'
    type Types::BusinessType.connection_type, null: true

    argument :order_by, Types::BusinessOrderEnumType,
             description: 'How to order the results.',
             required:    true

    def resolve(order_by:)
      ::Business.all.order(order_by)
    end
  end
end
