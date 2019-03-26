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
end
