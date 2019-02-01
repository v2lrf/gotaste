# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Area do
  it 'has a valid factory' do
    area = FactoryBot.build(:area)
    expect(area).to be_valid
  end

  describe '.closest_within' do
    let(:closest_area) do
      FactoryBot.create(
        :area,
        name:               'Closest area',
        longitude_latitude: 'POINT(12.589698 55.688932)'
      )
    end

    let(:farthest_area) do
      FactoryBot.create(
        :area,
        name:               'Farthest area',
        longitude_latitude: 'POINT(12.590852 55.6874795)'
      )
    end

    it 'returns the closest area from a point ordered by distance' do
      expect(
        Area.closest_within(latitude: 55.688931, longitude: 12.589697)
      ).to match_array([closest_area, farthest_area])
    end

    it "doesn't return area outside of the distance within" do
      expect(
        Area.closest_within(
          latitude:  55.688931,
          longitude: 12.589697,
          distance:  100
        )
      ).to match_array(closest_area)
    end
  end
end
