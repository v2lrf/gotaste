# frozen_string_literal: true

require 'rails_helper'

describe AuthenticateUser do
  let(:user_email)    { 'test@example.com' }
  let(:email)         { user_email }
  let(:user_password) { 'secretPassword' }
  let(:password)      { user_password }
  let!(:user) do
    FactoryBot.create :user, email: user_email, password: user_password
  end

  subject(:command) { AuthenticateUser.new(email, password) }

  describe '#call' do
    context 'when credentials is valid' do
      let(:jwt) { 'this_should_be_a_jwt' }

      before { allow(JsonWebToken).to receive(:encode).and_return(jwt) }

      it 'returns a JSON Web Token' do
        expect(command.call.result).to eq jwt
      end
    end

    context "when email doesn't exist" do
      let(:email) { 'email_that_doesnt_exist@example.com' }

      it "returns an 'invalid credentials' error" do
        expect(command.call.errors)
          .to match(user_authentication: ['Invalid credentials'])
      end
    end

    context 'when credentials is invalid' do
      let(:password) { 'invalid_password' }

      it "returns an 'invalid credentials' error" do
        expect(command.call.errors)
          .to match(user_authentication: ['Invalid credentials'])
      end
    end
  end
end
