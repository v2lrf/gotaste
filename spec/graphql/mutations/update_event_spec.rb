# frozen_string_literal: true

require 'rails_helper'

describe Mutations::UpdateEvent do
  let(:event) { create :event }

  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  describe '#ready?' do
    before do
      allow_any_instance_of(EventPolicy)
        .to receive(:update?).and_return(permitted)
    end

    context 'when user is permitted to do changes to the event' do
      let(:permitted) { true }

      it 'returns true' do
        expect(mutation.ready?(event_slug: event.slug)).to eq true
      end
    end

    context 'when user is forbidded to do changes to the event' do
      let(:permitted) { false }

      it 'raises GraphQL::ExecutionError' do
        expect { mutation.ready?(event_slug: event.slug) }
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

    it 'updates the event' do
      mutation.resolve(
        event_slug: event.slug,
        attributes: attributes,
        address:    address
      )

      expect(event.reload.name).to eq attributes[:name]
    end
  end
end
