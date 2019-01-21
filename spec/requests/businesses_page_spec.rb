# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Business pages', type: :request do
  describe 'GET index' do
    it 'is successful' do
      get businesses_path
      expect(response).to be_successful
    end
  end

  describe 'GET show' do
    let(:business) { FactoryBot.create :business }

    context 'when the business exists' do
      it 'is successful a response' do
        get business_path(business)
        expect(response).to be_successful
      end
    end

    context "when the business doesn't exist" do
      it 'returns a 404 not found response' do
        get business_path('non_existent')
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
