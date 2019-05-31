# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Business::ViewerHasFavourited do
  include GraphqlHelpers

  let(:business) { create :business }
  let(:object)   { business }
  let(:context)  { {} }

  subject(:resolver) do
    described_class.new(
      object:  object,
      context: context
    )
  end

  context 'when viewer is present' do
    let(:user)    { create :user }
    let(:context) { { current_user: user } }

    context 'when viewer has favourited business' do
      before do
        create(:favourite, business: business, user: user)
      end

      it 'returns true' do
        result = batch do
          resolver.resolve
        end

        expect(result.sync).to be true
      end
    end

    context 'when viewer has not favourited business' do
      it 'returns false' do
        result = batch do
          resolver.resolve
        end

        expect(result.sync).to be false
      end
    end
  end

  context 'when viewer is blank' do
    it 'returns false' do
      expect(resolver.resolve).to be false
    end
  end
end
