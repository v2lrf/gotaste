# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::FindEvents do
  subject(:klass) do
    described_class.new(
      object:  nil,
      context: {}
    )
  end

  let(:when_event_begins) { 'UPCOMING' }

  let(:args) do
    {
      when_event_begins: when_event_begins,
      order_by:          'name asc'
    }
  end

  let!(:past_event_a) do
    FactoryBot.create(:event, name: 'A', begins_at: Time.current - 1.day)
  end

  let!(:past_event_b) do
    FactoryBot.create(:event, name: 'B', begins_at: Time.current - 2.days)
  end

  let!(:upcoming_event_a) do
    FactoryBot.create(:event, name: 'A', begins_at: Time.current + 1.day)
  end

  let!(:upcoming_event_b) do
    FactoryBot.create(:event, name: 'B', begins_at: Time.current + 2.days)
  end

  describe 'when_event_begins argument' do
    context 'when `when_event_begins` is PAST' do
      let(:when_event_begins) { 'PAST' }

      it 'returns past events' do
        expect(klass.resolve(args))
          .to match_array([past_event_a, past_event_b])
      end
    end

    context 'when `when_event_begins` is UPCOMING' do
      let(:when_event_begins) { 'UPCOMING' }

      it 'returns upcoming events' do
        expect(klass.resolve(args))
          .to match_array([upcoming_event_a, upcoming_event_b])
      end
    end
  end
end
