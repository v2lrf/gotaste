# frozen_string_literal: true

require 'rails_helper'

describe Mutations::FavouriteBusiness do
  let!(:user)     { create :user }
  let!(:business) { create :business }

  subject(:mutation) do
    described_class.new(object: nil, context: { current_user: user })
  end

  describe '#authorized?' do
    before do
      allow_any_instance_of(FavouritePolicy)
        .to receive(:create?).and_return(permitted)
    end

    context 'when user is permitted to favourite an event' do
      let(:permitted) { true }

      it 'returns true' do
        expect(mutation.authorized?(business_slug: business.slug)).to eq true
      end
    end

    context 'when user is forbidded to favourite an event' do
      let(:permitted) { false }

      it 'raises GraphQL::ExecutionError' do
        expect { mutation.authorized?(business_slug: business.slug) }
          .to raise_error(GraphQL::ExecutionError)
      end
    end
  end

  describe '#resolve' do
    it 'calls the FavouriteBusinessService' do
      expect_any_instance_of(FavouriteBusinessService)
        .to receive(:call).and_call_original

      mutation.resolve(
        business_slug: business.slug
      )
    end
  end
end
