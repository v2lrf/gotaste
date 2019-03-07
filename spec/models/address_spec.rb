# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Address do
  it 'has a valid factory' do
    address = FactoryBot.build(:address)
    expect(address).to be_valid
  end

  it 'sets the coordinate point before save' do
    address = FactoryBot.build(:address, coordinate: nil)
    address.save

    expect(address.coordinate).not_to be_nil
  end

  describe '.closest_within' do
    let(:closest_address) do
      FactoryBot.create(
        :address,
        latitude:  55.688932,
        longitude: 12.589698
      )
    end

    let(:farthest_address) do
      FactoryBot.create(
        :address,
        latitude:  55.6874795,
        longitude: 12.590852
      )
    end

    it 'returns the closest businesses from a point ordered by distance' do
      expect(
        Address.closest_within(latitude: 55.688931, longitude: 12.589697)
      ).to match_array([closest_address, farthest_address])
    end

    it "doesn't return businesses outside of the distance within" do
      expect(
        Address.closest_within(
          latitude:  55.688931,
          longitude: 12.589697,
          distance:  100
        )
      ).to match_array(closest_address)
    end
  end
end
