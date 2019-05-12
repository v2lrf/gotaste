# frozen_string_literal: true

require 'spec_helper'
require './app/services/after_sign_in_path_service'

describe AfterSignInPathService do
  let(:admin)              { false }
  let(:businesses)         { [] }
  let(:user) do
    instance_double('user', admin?: admin, businesses: businesses)
  end
  let(:admin_path)         { '/admin' }
  let(:business_user_path) { '/business' }
  let(:user_path)          { '/' }

  subject(:service) do
    described_class.new(
      user:               user,
      admin_path:         admin_path,
      business_user_path: business_user_path,
      user_path:          user_path
    )
  end

  describe '#call' do
    context 'when user is an admin' do
      let(:admin) { true }

      it 'returns the admin path' do
        expect(service.call).to eq admin_path
      end
    end

    context 'when user is a business employee' do
      let(:businesses) { ['Business'] }

      it 'returns the business room path' do
        expect(service.call).to eq business_user_path
      end
    end

    context 'when user is a regular user' do
      it 'returns the root path' do
        expect(service.call).to eq user_path
      end
    end
  end
end
