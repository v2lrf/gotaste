# frozen_string_literal: true

require 'rails_helper'

describe Mutations::SignUp do
  let(:arguments) do
    {
      email:      email,
      password:   'password',
      first_name: 'Jack',
      last_name:  'Black'
    }
  end

  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  context 'when arguments is valid' do
    let(:email) { 'jack.black@example.com' }

    it 'creates a user' do
      expect { mutation.resolve(arguments) }.to change(User, :count).by(+1)
    end

    it 'sends a "welcome email"' do
      expect(UsersMailer).to receive_message_chain(:welcome, :deliver_later)
      mutation.resolve(arguments)
    end

    it 'returns the authentication token for the user' do
      expect(mutation.resolve(arguments))
        .to include(authentication_token: anything)
    end
  end

  context 'when email already exists' do
    let!(:existing_user) { FactoryBot.create(:user) }
    let(:email)          { existing_user.email }

    it 'returns an error' do
      expect(mutation.resolve(arguments))
        .to eq GraphQL::ExecutionError.new('email has already been taken')
    end
  end

  context 'when arguments is invalid' do
    let(:email) { '' }

    it 'returns an error' do
      expect(mutation.resolve(arguments))
        .to eq GraphQL::ExecutionError.new("email can't be blank")
    end
  end
end
