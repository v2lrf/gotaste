# frozen_string_literal: true

require 'rails_helper'

describe EventAnalytics do
  let(:event) { create :event }

  subject(:event_analytics) do
    described_class.new(event_slug: event.slug)
  end

  describe '#page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit:      visit,
          name:       EventAnalytics::EVENT_PAGE_VIEW,
          properties: { slug: event.slug }
        )
      end
    end

    it 'returns total number of page views for the event' do
      expect(event_analytics.page_views.size).to eq 2
    end
  end

  describe '#page_visits' do
    before do
      3.times do
        visit = Ahoy::Visit.create
        Ahoy::Event.create(
          visit:      visit,
          name:       EventAnalytics::EVENT_PAGE_VIEW,
          properties: { slug: event.slug }
        )
      end
    end

    it 'returns total number of visitors for the event' do
      expect(event_analytics.page_visits.size).to eq 3
    end
  end
end
