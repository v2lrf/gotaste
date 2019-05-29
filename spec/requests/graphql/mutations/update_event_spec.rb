# frozen_string_literal: true

require 'rails_helper'

describe 'update event', type: :request do
  include GraphqlHelpers

  let(:business)     { create(:business) }
  let(:event)        { create(:event, host: business) }
  let(:current_user) { create(:user) }

  let(:new_event_name) { 'Wine tasting part 2' }

  def query
    <<~GQL
      mutation {
        updateEvent(
          input: {
            eventSlug: "#{event.slug}"
            attributes: {
              name: "#{new_event_name}"
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
    graphql_mutation_response(:update_event)
  end

  context 'when user is not permitted to create an event' do
    it 'returns "Not permitted" error' do
      post_graphql(query, current_user: current_user)
      expect(graphql_errors.first['message']).to eq 'Not permitted.'
    end
  end

  context 'when user is permitted to update an event' do
    let(:employee)     { create(:employee, business: business) }
    let(:current_user) { employee.user }

    it 'updates the event' do
      post_graphql(query, current_user: current_user)
      expect(event.reload.name).to eq new_event_name
    end

    it 'returns an event type' do
      post_graphql(query, current_user: current_user)
      expect(mutation_response['event']['name']).to eq new_event_name
    end
  end
end
