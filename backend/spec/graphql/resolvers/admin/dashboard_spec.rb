# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Admin::Dashboard do
  subject(:klass) do
    described_class.new(
      object:  nil,
      context: {}
    )
  end

  describe '#resolve' do
    context 'when date_interval argument is given' do
      let(:interval) { 1.day.ago..Time.current }

      it 'returns an instance of AdministrationAnalyticsService' do
        expect(AdministrationAnalyticsService)
          .to receive(:new).with(date_interval: interval)

        klass.resolve(date_interval: interval)
      end
    end

    context 'when no date_interval argument is given' do
      it 'returns an instance of AdministrationAnalyticsService' do
        expect(AdministrationAnalyticsService)
          .to receive(:new).with(date_interval: nil)

        klass.resolve
      end
    end
  end
end
