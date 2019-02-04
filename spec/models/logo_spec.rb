# frozen_string_literal: true

require 'rails_helper'

describe Logo do
  let(:business_logo_id) { nil }

  subject(:logo) { described_class.new(business_logo_id: business_logo_id) }

  describe '#id' do
    context 'when business_logo_id is present' do
      let(:business_logo_id) { 'logo_id' }

      it 'returns the id of the business logo' do
        expect(logo.id).to eq "Govinu/logos/#{business_logo_id}"
      end
    end

    context 'when business_logo_id is nil' do
      it 'returns the id of the default logo' do
        expect(logo.id).to eq 'Govinu/logos/default'
      end
    end
  end
end
