# frozen_string_literal: true

module Mutations
  class SignInUser < BaseMutation
    null true

    argument :email, String, required: true
    argument :password, String, required: true

    field :token, String, null: true

    def resolve(email:, password:)
      command = AuthenticateUser.call(email, password)

      if command.success?
        { token: command.result }
      else
        GraphQL::ExecutionError.new(
          'Invalid credentials',
          options: command.errors
        )
      end
    end
  end
end
