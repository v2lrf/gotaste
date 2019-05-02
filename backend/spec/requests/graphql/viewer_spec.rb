# frozen_string_literal: true

require 'rails_helper'

describe 'viewer field', type: :request do
  include GraphqlHelpers

  let(:query) do
    graphql_query_for('viewer', {}, 'role')
  end

  context 'when user is signed in' do
    let(:current_user) { create :user }

    it "shows the role 'USER" do
      post_graphql(query, current_user: current_user)

      expect(graphql_data['viewer']).to eq('role' => 'USER')
    end
  end

  context 'when bar/business owner is signed in' do
    let(:current_user) { create :user, :business_owner }

    it "shows the role 'ADMIN" do
      post_graphql(query, current_user: current_user)

      expect(graphql_data['viewer']).to eq('role' => 'OWNER')
    end
  end

  context 'when admin is signed in' do
    let(:current_user) { create :user, :admin }

    it "shows the role 'ADMIN" do
      post_graphql(query, current_user: current_user)

      expect(graphql_data['viewer']).to eq('role' => 'ADMIN')
    end
  end

  context 'when user is not signed in' do
    let(:current_user) { nil }

    it 'returns an empty `viewer`' do
      post_graphql(query, current_user: current_user)

      expect(graphql_data['viewer']).to be_nil
    end
  end
end
