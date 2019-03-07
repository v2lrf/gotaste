# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Business, type: :model do
  it 'has a valid factory' do
    business = FactoryBot.build(:business)
    expect(business).to be_valid
  end

  describe '#logo_id' do
    let(:business) { FactoryBot.create(:business) }

    it 'returns the logo id' do
      expect(business.logo_id).to eq 'Govinu/logos/default'
    end
  end

  describe '#hero_image_id' do
    let(:business) { FactoryBot.create(:business) }

    it 'returns the logo id' do
      expect(business.hero_image_id)
        .to eq 'Govinu/hero_images/6229d0ce88881c305df3bcdf60db14e4'
    end
  end
end
