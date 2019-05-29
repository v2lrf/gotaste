# frozen_string_literal: true

require 'rails_helper'

describe 'create event', type: :request do
  include GraphqlHelpers

  let(:business)     { create(:business) }
  let(:current_user) { create(:user) }

  def query
    <<~GQL
      mutation {
        createEvent(
          input: {
            businessSlug: "#{business.slug}"
            attributes: {
              name: "Wine tasting"
              beginsAt: "2019-01-01T18:00"
            }
            address: {
              streetName: "Nygade"
              streetNumber: "1"
              postalCode: "1000"
              city: "Copenhagen"
            }
          }
        ) {
          event {
            name
          }
        }
      }
    GQL
  end

  def mutation_response
    graphql_mutation_response(:create_event)
  end

  context 'when user is not permitted to create an event' do
    it 'returns "Not permitted" error' do
      post_graphql(query, current_user: current_user)
      expect(graphql_errors.first['message']).to eq 'Not permitted.'
    end
  end

  context 'when user is permitted to create an event' do
    let(:employee)     { create(:employee, business: business) }
    let(:current_user) { employee.user }

    it 'creates an event' do
      expect do
        post_graphql(query, current_user: current_user)
      end.to change { Event.count }.by(1)
    end

    it 'returns an event type' do
      post_graphql(query, current_user: current_user)
      expect(mutation_response['event']['name']).to eq 'Wine tasting'
    end
  end
end
