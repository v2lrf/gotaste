# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::SignInUser do
  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  describe '#resolve' do
    let(:user_password)  { 'secretPassword' }
    let(:password)       { user_password }
    let!(:existing_user) { FactoryBot.create :user, password: user_password }

    let(:args) do
      {
        email:    existing_user.email,
        password: password
      }
    end

    context 'when credentials are valid' do
      it 'returns a JWT token' do
        expect(mutation.resolve(args)).to match(token: anything)
      end
    end

    context 'when credentials are invalid' do
      let(:password) { 'incorrectPassword' }

      it 'returns an ExecutionError: Invalid credentials' do
        expect(mutation.resolve(args))
          .to eq(GraphQL::ExecutionError.new('Invalid credentials'))
      end
    end
  end
end
