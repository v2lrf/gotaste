# frozen_string_literal: true

require 'rails_helper'

describe 'dashboard field', type: :request do
  include GraphqlHelpers

  let(:query) do
    graphql_query_for('dashboard', {}, 'pageViews')
  end

  context 'when user is signed in' do
    let(:current_user) { create :user }

    it "returns a field doesn't exist error" do
      post_graphql(query, current_user: current_user)

      expect(graphql_errors.first['message'])
        .to eq "Field 'dashboard' doesn't exist on type 'Query'"
    end
  end

  context 'when bar/business owner is signed in' do
    let(:current_user) { create :user, :business_owner }

    it "returns a field doesn't exist error" do
      post_graphql(query, current_user: current_user)

      expect(graphql_errors.first['message'])
        .to eq "Field 'dashboard' doesn't exist on type 'Query'"
    end
  end

  context 'when admin is signed in' do
    let(:current_user) { create :user, :admin }

    it 'shows the page views for the admin' do
      post_graphql(query, current_user: current_user)

      expect(graphql_data['dashboard']).to eq('pageViews' => 0)
    end
  end

  context 'when user is not signed in' do
    let(:current_user) { nil }

    it "returns a field doesn't exist error" do
      post_graphql(query, current_user: current_user)

      expect(graphql_errors.first['message'])
        .to eq "Field 'dashboard' doesn't exist on type 'Query'"
    end
  end
end
