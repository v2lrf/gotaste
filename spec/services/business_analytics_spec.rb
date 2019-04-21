# frozen_string_literal: true

require 'rails_helper'

describe BusinessAnalytics do
  let(:business) { create :business }

  subject(:business_analytics) { described_class.new(business: business) }

  describe '#page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit:      visit,
          name:       'Business viewed',
          properties: { page: "/business/#{business.slug}" }
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of page views for the business' do
        expect(business_analytics.page_views).to eq 2
      end
    end
  end

  describe '#page_visitors' do
    before do
      3.times do
        visit = Ahoy::Visit.create
        Ahoy::Event.create(
          visit:      visit,
          name:       'Business viewed',
          properties: { page: "/business/#{business.slug}" }
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of visitors for the business' do
        expect(business_analytics.page_visitors).to eq 3
      end
    end
  end
end
