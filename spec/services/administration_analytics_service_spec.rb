# frozen_string_literal: true

require 'rails_helper'

describe AdministrationAnalyticsService do
  let(:date_interval) { nil }

  subject(:service) { described_class.new(date_interval: date_interval) }

  describe '#page_views' do
    let(:visit) { Ahoy::Visit.create }

    before do
      2.times do
        Ahoy::Event.create(
          visit: visit,
          name:  '$view',
          time:  Time.current
        )
      end
    end

    context 'when no date interval is given' do
      it 'returns total number of page views' do
        expect(service.page_views).to eq 2
      end
    end

    context 'when date interval is given' do
      let(:date_interval) { 1.day.ago..Time.current }
      let!(:event) do
        Ahoy::Event.create(
          visit: visit,
          name:  '$view',
          time:  2.days.ago
        )
      end

      it 'returns total number of page views in the given interval' do
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
          name:  '$view',
          time:  Time.current
        )
      end
    end

    context 'when no date interval is given' do
      it 'returns total number of visitors' do
        expect(service.page_visitors).to eq 3
      end
    end

    context 'when date interval is given' do
      let(:date_interval) { 1.day.ago..Time.current }
      let!(:event) do
        other_visit = Ahoy::Visit.create
        Ahoy::Event.create(
          visit: other_visit,
          name:  '$view',
          time:  2.days.ago
        )
      end

      it 'returns total number of visitors in the given interval' do
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
          name:  '$click',
          time:  Time.current
        )
      end
    end

    context 'when no date interval is given' do
      it 'returns total number of clicks' do
        expect(service.page_clicks).to eq 2
      end
    end

    context 'when date interval is given' do
      let(:date_interval) { 1.day.ago..Time.current }
      let!(:event) do
        Ahoy::Event.create(
          visit: visit,
          name:  '$click',
          time:  2.days.ago
        )
      end

      it 'returns total number of clicks in the given interval' do
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
          name:  'business_page_view',
          time:  Time.current
        )
      end
    end

    context 'when no date interval is given' do
      it 'returns total number of business page views' do
        expect(service.business_page_views).to eq 2
      end
    end

    context 'when date interval is given' do
      let(:date_interval) { 1.day.ago..Time.current }
      let!(:event) do
        Ahoy::Event.create(
          visit: visit,
          name:  'business_page_view',
          time:  2.days.ago
        )
      end

      it 'returns total number of business page views in the given interval' do
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
          name:  'event_page_view',
          time:  Time.current
        )
      end
    end

    context 'when no date interval is given' do
      it 'returns total number of event page views' do
        expect(service.event_page_views).to eq 2
      end
    end

    context 'when date interval is given' do
      let(:date_interval) { 1.day.ago..Time.current }
      let!(:event) do
        Ahoy::Event.create(
          visit: visit,
          name:  'event_page_view',
          time:  2.days.ago
        )
      end

      it 'returns total number of event page views in the given interval' do
        expect(service.event_page_views).to eq 2
      end
    end
  end
end
