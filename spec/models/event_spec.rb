# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do
  it 'has a valid factory' do
    event = FactoryBot.build(:event)
    expect(event).to be_valid
  end

  it 'generates a slug from the event date and name' do
    event = FactoryBot.create(:event)
    expect(event.slug)
  end

  describe 'prefill_address callback' do
    let(:host)     { FactoryBot.create(:business) }
    let!(:address) { FactoryBot.create(:address, addressable: host) }

    let(:same_address_as_host) { true }

    let(:event) do
      FactoryBot.build(
        :event,
        host:                 host,
        same_address_as_host: same_address_as_host
      )
    end

    context 'when `same_address_as_host` is true' do
      let(:same_address_as_host) { true }

      it 'prefills address from host' do
        event.save
        expect(event.address).not_to be_nil
      end
    end

    context 'when `same_address_as_host` is false' do
      let(:same_address_as_host) { false }

      it 'does not prefill address from host' do
        event.save
        expect(event.address).to be_nil
      end
    end
  end

  describe '#date' do
    let(:event) { FactoryBot.build(:event) }

    it 'returns the date from the begins_at' do
      expect(event.date).to eq event.begins_at.to_date
    end
  end
end
