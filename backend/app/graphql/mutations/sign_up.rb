# frozen_string_literal: true

module Mutations
  class SignUp < Mutations::BaseMutation
    argument :email, String, 'Email used to login with.', required: true
    argument :password, String, 'Password used to login with.', required: true
    argument :first_name, String, 'First name of the user.', required: true
    argument :last_name, String, 'Last name of the user.', required: true

    field :authentication_token, String,
          description: 'Authentication token for the user.',
          null:        true

    field :user, Types::UserType, 'The user who is signed up.', null: true

    def resolve(**args)
      user = User.create!(args)
      UsersMailer.welcome(user: user).deliver_later

      { user: user, authentication_token: user.authentication_token }
    rescue ActiveRecord::RecordInvalid => e
      GraphQL::ExecutionError.new(
        e.record.errors.full_messages.join(', ')
      )
    end
  end
end
