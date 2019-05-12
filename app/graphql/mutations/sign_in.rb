# frozen_string_literal: true

module Mutations
  class SignIn < Mutations::BaseMutation
    null true

    argument :email, String, required: true
    argument :password, String, required: true

    field :authentication_token, String, null: true

    def resolve(email:, password:)
      user = User.find_for_database_authentication(email: email)

      return incorrect_credentials_error unless user&.valid_password?(password)

      { authentication_token: user.authentication_token }
    end

    private

    def incorrect_credentials_error
      GraphQL::ExecutionError.new('Incorrect Email/Password')
    end
  end
end
