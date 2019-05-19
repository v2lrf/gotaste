# frozen_string_literal: true

require 'rails_helper'

describe BusinessAnalytics do
  let(:date_interval) { 1.day.ago..Time.current }
  let(:business)      { create :business }

  subject(:business_analytics) do
    described_class.new(
      business_slug: business.slug,
      date_interval: date_interval
    )
  end

  describe '#page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit:      visit,
          name:       BusinessAnalytics::BUSINESS_PAGE_VIEW,
          properties: { slug: business.slug },
          time:       Time.current - 1.hour
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of page views for the business' do
        expect(business_analytics.page_views.size).to eq 2
      end
    end
  end

  describe '#page_visits' do
    before do
      3.times do
        visit = Ahoy::Visit.create
        Ahoy::Event.create(
          visit:      visit,
          name:       BusinessAnalytics::BUSINESS_PAGE_VIEW,
          properties: { slug: business.slug },
          time:       Time.current - 1.hour
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of visitors for the business' do
        expect(business_analytics.page_visits.size).to eq 3
      end
    end
  end
end
