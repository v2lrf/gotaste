# frozen_string_literal: true

require 'rails_helper'

describe PrivateRoom::Dashboards::IndexView do
  let(:business_analytics) { instance_double('business_analytics') }

  subject(:view_object) do
    described_class.new(business_analytics: business_analytics)
  end

  describe '#total_page_views' do
    it 'calls business analytics page views' do
      expect(business_analytics).to receive(:page_views)
      view_object.total_page_views
    end
  end

  describe '#total_visitors' do
    it 'calls business analytics page views' do
      expect(business_analytics).to receive(:page_visitors)
      view_object.total_visitors
    end
  end
end
