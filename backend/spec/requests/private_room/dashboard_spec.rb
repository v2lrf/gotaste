# frozen_string_literal: true

require 'rails_helper'

describe 'Private Room Dashboard page', type: :request do
  describe 'GET index' do
    before do
      sign_in(user)
    end

    context 'when signed in as an admin' do
      let(:user) { create(:user, :admin) }

      context 'when current_business_id session is present' do
        let(:business) { create :business }

        it 'is a successful request' do
          get private_room_root_path, params: { admin_business_id: business.id }
          expect(response).to be_successful
        end
      end

      context 'when current_business session is  not present' do
        it "is a 'not found' response" do
          get private_room_root_path
          expect(response.code).to eq '404'
        end
      end
    end

    context 'when signed in as a business owner' do
      let(:employee) { create(:employee) }
      let(:user)     { employee.user }

      it 'is a successful request' do
        get private_room_root_path
        expect(response).to be_successful
      end
    end

    context 'when signed guest' do
      let(:user) { create(:user) }

      it "is a 'not found' response" do
        get private_room_root_path
        expect(response.code).to eq '404'
      end
    end
  end
end
