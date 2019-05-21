# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Event::Statistics do
  let(:object)  { instance_double('event', slug: 'event-slug') }
  let(:context) { {} }

  subject(:resolver) do
    described_class.new(
      object:  object,
      context: context
    )
  end

  describe '.authorized?' do
    it 'calls the business policy' do
      expect_any_instance_of(EventPolicy).to receive(:edit?)
      described_class.authorized?(object, context)
    end
  end

  describe '#resolve' do
    it 'returns an instance of EventAnalytics' do
      expect(EventAnalytics)
        .to receive(:new)
        .with(event_slug: 'event-slug')

      resolver.resolve
    end
  end
end
