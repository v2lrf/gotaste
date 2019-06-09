# frozen_string_literal: true

require 'rails_helper'

describe 'favourite business', type: :request do
  include GraphqlHelpers

  let(:business)     { create(:business) }
  let(:current_user) { create(:user) }

  def query
    <<~GQL
      mutation {
        favouriteBusiness(input: {businessSlug: "#{business.slug}"}) {
          success
        }
      }
    GQL
  end

  def mutation_response
    graphql_mutation_response(:favourite_business)
  end

  context 'when user is not permitted to favourite the business' do
    it 'returns "Not permitted" error' do
      post_graphql(query, current_user: nil)
      expect(graphql_errors.first['message']).to eq 'Not permitted.'
    end
  end

  context 'when user is permitted to favourite the business' do
    it 'creates a favourite' do
      expect do
        post_graphql(query, current_user: current_user)
      end.to change { Favourite.count }.by(1)
    end

    it 'returns success' do
      post_graphql(query, current_user: current_user)
      expect(mutation_response['success']).to eq true
    end
  end

  context 'when user already favourited the business' do
    before do
      create(:favourite, business: business, user: current_user)
    end

    it 'returns "Not permitted" error' do
      post_graphql(query, current_user: current_user)

      expect(graphql_errors.first['message'])
        .to eq 'Business has already been favourited'
    end
  end
end
