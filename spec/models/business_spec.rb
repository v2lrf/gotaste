# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Business, type: :model do
  it 'has a valid factory' do
    business = FactoryBot.build(:business)
    expect(business).to be_valid
  end

  it 'sets the longitude_latitude point before save' do
    business = FactoryBot.build(:business, longitude_latitude: nil)
    business.save
    expect(business.longitude_latitude).not_to be_nil
  end

  describe '.closest_within' do
    let(:closest_business) do
      FactoryBot.create(
        :business,
        name:     'Closest business',
        latitude:  55.688932,
        longitude: 12.589698
      )
    end

    let(:farthest_business) do
      FactoryBot.create(
        :business,
        name:      'Farthest business',
        latitude:  55.6874795,
        longitude: 12.590852
      )
    end

    it 'returns the closest businesses from a point ordered by distance' do
      expect(
        Business.closest_within(latitude: 55.688931, longitude: 12.589697)
      ).to match_array([closest_business, farthest_business])
    end

    it "doesn't return businesses outside of the distance within" do
      expect(
        Business.closest_within(
          latitude:  55.688931,
          longitude: 12.589697,
          distance:  100
        )
      ).to match_array(closest_business)
    end
  end
end
