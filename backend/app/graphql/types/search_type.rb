# frozen_string_literal: true

module Types
  class SearchType < BaseUnion
    description 'Objects which may be found by search.'
    possible_types BusinessType, EventType

    def self.resolve_type(object, _context)
      if object.is_a?(Business)
        Types::BusinessType
      else
        Types::EventType
      end
    end
  end
end
