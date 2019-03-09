# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do
  it 'has a valid factory' do
    event = FactoryBot.build(:event)
    expect(event).to be_valid
  end

  describe 'upcoming/past events scopes' do
  end

  describe 'scopes' do
    let!(:upcoming_event_1) do
      FactoryBot.create(:event, begins_at: Time.current + 1.second)
    end

    let!(:upcoming_event_2) do
      FactoryBot.create(:event, begins_at: Time.current + 1.day)
    end

    let!(:past_event_1) do
      FactoryBot.create(:event, begins_at: Time.current - 1.second)
    end

    let!(:past_event_2) do
      FactoryBot.create(:event, begins_at: Time.current - 1.day)
    end

    describe 'upcoming scope' do
      it 'only return upcoming events' do
        expect(Event.upcoming)
          .to match_array([upcoming_event_1, upcoming_event_2])
      end
    end

    describe 'past scope' do
      it 'only returns event that has already taken place' do
        expect(Event.past)
          .to match_array([past_event_1, past_event_2])
      end
    end
  end
end
