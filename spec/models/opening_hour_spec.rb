# frozen_string_literal: true

require 'rails_helper'

RSpec.describe OpeningHour, type: :model do
  it 'has a valid factory' do
    opening_hour = FactoryBot.build(:opening_hour)
    expect(opening_hour).to be_valid
  end

  describe '#day_of_week' do
    it 'returns the name of the day' do
      opening_hour = FactoryBot.build(:opening_hour)
      expect(opening_hour.day_of_week).to eq 'Monday'
    end
  end

  describe '#open' do
    it 'returns the time in hh:mm format' do
      opening_hour = FactoryBot.build(:opening_hour, open: '09:00')
      expect(opening_hour.open).to eq '09:00'
    end
  end

  describe '#close' do
    it 'returns the time in hh:mm format' do
      opening_hour = FactoryBot.build(:opening_hour, close: '17:00')
      expect(opening_hour.close).to eq '17:00'
    end
  end
end
