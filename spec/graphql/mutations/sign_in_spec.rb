# frozen_string_literal: true

require 'rails_helper'

describe Mutations::SignIn do
  let(:password) { 'secretPassword' }
  let!(:user)    { FactoryBot.create(:user, password: password) }

  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  context 'when email exists' do
    let(:email) { user.email }

    context 'when password is correct' do
      it 'returns an authentication token' do
        expect(mutation.resolve(email: email, password: password))
          .to eq authentication_token: user.authentication_token
      end
    end

    context 'when password is incorrect' do
      it "returns 'Incorrect Email/Password' error" do
        expect(mutation.resolve(email: email, password: 'otherPassword'))
          .to eq GraphQL::ExecutionError.new('Incorrect Email/Password')
      end
    end
  end

  context "when email doesn't exist" do
    let(:other_email) { 'this_does_not_exist@example.com' }

    it "returns 'Incorrect Email/Password' error" do
      expect(mutation.resolve(email: other_email, password: 'otherPassword'))
        .to eq GraphQL::ExecutionError.new('Incorrect Email/Password')
    end
  end
end
