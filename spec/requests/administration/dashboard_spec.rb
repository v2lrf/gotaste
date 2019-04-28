# frozen_string_literal: true

require 'rails_helper'

describe 'Administration dashboard page', type: :request do
  describe 'GET index' do
    before do
      sign_in(user)
    end

    context 'when signed in as an admin' do
      let(:user) { create(:user, :admin) }

      it 'is a successful request' do
        get administration_root_path
        expect(response).to be_successful
      end
    end

    context 'when signed in as a business owner' do
      let(:employee) { create(:employee) }
      let(:user)     { employee.user }

      it "is a 'not found' response" do
        get administration_root_path
        expect(response.code).to eq '404'
      end
    end

    context 'when signed in as a regular user' do
      let(:user) { create(:user) }

      it "is a 'not found' response" do
        get administration_root_path
        expect(response.code).to eq '404'
      end
    end
  end
end
