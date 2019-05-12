# frozen_string_literal: true

require 'rails_helper'

describe Mutations::CreateEvent do
  let!(:business) { create :business }

  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  describe '#ready?' do
    before do
      allow_any_instance_of(EventPolicy)
        .to receive(:create?).and_return(permitted)
    end

    context 'when user is permitted to create the event' do
      let(:permitted) { true }

      it 'returns true' do
        expect(mutation.ready?(business_slug: business.slug)).to eq true
      end
    end

    context 'when user is forbidded to create the event' do
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
        name:      'New name',
        begins_at: Time.current + 1.day
      }
    end

    let(:address) do
      {
        street_name:   'Street Name',
        street_number: '1',
        postal_code:   '1000',
        city:          'Copenhagen'
      }
    end

    it 'creates the event' do
      mutation.resolve(
        business_slug: business.slug,
        attributes:    attributes,
        address:       address
      )

      expect(business.events.count).to eq 1
    end
  end
end
