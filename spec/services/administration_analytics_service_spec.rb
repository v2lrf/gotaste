# frozen_string_literal: true

require 'rails_helper'

describe AdministrationAnalyticsService do
  subject(:service) { described_class.new }

  describe '#page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit: visit,
          name:  '$view'
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of page views' do
        expect(service.page_views).to eq 2
      end
    end
  end

  describe '#page_visitors' do
    before do
      3.times do
        visit = Ahoy::Visit.create
        Ahoy::Event.create(
          visit: visit,
          name:  '$view'
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of visitors' do
        expect(service.page_visitors).to eq 3
      end
    end
  end

  describe '#page_clicks' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit: visit,
          name:  '$click'
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of clicks' do
        expect(service.page_clicks).to eq 2
      end
    end
  end

  describe '#business_page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit: visit,
          name:  'business_page_view'
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of business page views' do
        expect(service.business_page_views).to eq 2
      end
    end
  end

  describe '#event_page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit: visit,
          name:  'event_page_view'
        )
      end
    end

    context 'when no time period is given' do
      it 'returns total number of event page views' do
        expect(service.event_page_views).to eq 2
      end
    end
  end
end
