# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Event page', type: :request do
  describe 'GET show' do
    let(:event) { FactoryBot.create :event }

    context 'when the event exists' do
      it 'is successful a response' do
        get event_path(event)
        expect(response).to be_successful
      end
    end

    context "when the event doesn't exist" do
      it 'returns a 404 not found response' do
        get event_path('non_existent')
        expect(response).to have_http_status(:not_found)
      end
    end
  end
end
