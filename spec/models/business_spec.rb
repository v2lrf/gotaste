# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Business, type: :model do
  it 'has a valid factory' do
    business = FactoryBot.build(:business)
    expect(business).to be_valid
  end

  describe '#full_logo_id' do
    let(:business) { FactoryBot.create(:business) }

    it 'returns the logo id' do
      expect(business.full_logo_id).to eq 'default'
    end
  end

  describe '#full_hero_image_id' do
    let(:business) { FactoryBot.create(:business) }

    it 'returns the logo id' do
      expect(business.full_hero_image_id)
        .to eq 'default'
    end
  end

  describe '#open_now?' do
    let(:business) { create(:business) }

    before do
      travel_to time
    end

    after do
      travel_back
    end

    context 'when business is open today' do
      let!(:opening_hour) do
        create(
          :opening_hour,
          business:    business,
          day_of_week: 'Monday',
          open:        '10:00',
          close:       '18:00'
        )
      end

      context 'when time right now is in the opening hours' do
        let(:time) { Time.zone.now.beginning_of_week + 10.hours }

        it 'returns true' do
          expect(business.open_now?).to be true
        end
      end

      context 'when time right now is outside the opening hours' do
        let(:time) { Time.zone.now.beginning_of_week + 19.hours }

        it 'returns false' do
          expect(business.open_now?).to be false
        end
      end
    end

    context 'when business is closed today' do
      let(:time) { Time.zone.now.beginning_of_week + 10.hours }

      let!(:opening_hour) { create(:opening_hour, :closed, business: business) }

      it 'returns false' do
        expect(business.open_now?).to be false
      end
    end
  end
end
