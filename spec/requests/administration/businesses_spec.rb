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
        get administration_businesses_path
        expect(response).to be_successful
      end
    end
  end
end
