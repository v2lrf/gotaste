# frozen_string_literal: true

require 'rails_helper'

describe 'Unfavourite business', type: :request do
  include GraphqlHelpers

  let(:business)   { create(:business) }
  let(:user)       { create(:user) }
  let!(:favourite) { create(:favourite, user: user, business: business) }

  def query
    <<~GQL
      mutation {
        unfavouriteBusiness(input: {businessSlug: "#{business.slug}"}) {
          success
        }
      }
    GQL
  end

  def mutation_response
    graphql_mutation_response(:unfavourite_business)
  end

  context 'when user is not permitted to unfavourite the business' do
    it 'returns "Not permitted" error' do
      post_graphql(query, current_user: nil)
      expect(graphql_errors.first['message']).to eq 'Not permitted.'
    end
  end

  context 'when user is permitted to unfavourite the business' do
    it 'deletes the favourite' do
      expect do
        post_graphql(query, current_user: user)
      end.to change { Favourite.count }.by(-1)
    end

    it 'returns success' do
      post_graphql(query, current_user: user)
      expect(mutation_response['success']).to eq true
    end
  end
end
