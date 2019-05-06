# frozen_string_literal: true

require 'rails_helper'

describe Mutations::UpdateBusiness do
  let!(:business) { create :business }

  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  describe '#ready?' do
    before do
      allow_any_instance_of(BusinessPolicy)
        .to receive(:update?).and_return(permitted)
    end

    context 'when user is permitted to do changes to the business' do
      let(:permitted) { true }

      it 'returns true' do
        expect(mutation.ready?(business_slug: business.slug)).to eq true
      end
    end

    context 'when user is forbidded to do changes to the business' do
      let(:permitted) { false }

      it 'raises GraphQL::ExecutionError' do
        expect { mutation.ready?(business_slug: business.slug) }
          .to raise_error(GraphQL::ExecutionError)
      end
    end
  end

  describe '#resolve' do
    let(:attributes) do
      {
        name: 'New name'
      }
    end

    it 'updates the business' do
      mutation.resolve(business_slug: business.slug, attributes: attributes)

      expect(business.reload.name).to eq attributes[:name]
    end
  end
end
