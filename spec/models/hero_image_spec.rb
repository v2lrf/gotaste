# frozen_string_literal: true

require 'rails_helper'

describe HeroImage do
  let(:hero_image_id) { nil }

  subject(:hero_image) { described_class.new(hero_image_id: hero_image_id) }

  describe '#id' do
    context 'when hero_image_id is present' do
      let(:hero_image_id) { 'hero_image_id' }

      it 'returns the id of the business hero image' do
        expect(hero_image.id).to eq "Govinu/hero_images/#{hero_image_id}"
      end
    end

    context 'when hero_image_id is nil' do
      it 'returns the id of the default hero image' do
        expect(hero_image.id).to eq 'Govinu/hero_images/default'
      end
    end
  end
end
