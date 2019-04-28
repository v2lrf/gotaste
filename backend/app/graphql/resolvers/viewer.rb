# frozen_string_literal: true

module Resolvers
  class Viewer < Resolvers::Base
    description 'The signed in user.'
    type Types::UserType, null: true

    def resolve
      context[:current_user]
    end
  end
end
