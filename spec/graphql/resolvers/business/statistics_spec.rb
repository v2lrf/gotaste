# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Business::Statistics do
  let(:object) { instance_double('business', slug: 'business-slug') }
  let(:context) { {} }

  subject(:resolver) do
    described_class.new(
      object:  object,
      context: context
    )
  end

  describe '.authorized?' do
    it 'calls the business policy' do
      expect_any_instance_of(BusinessPolicy).to receive(:edit?)
      described_class.authorized?(object, context)
    end
  end

  describe '#resolve' do
    it 'returns an instance of BusinessAnalytics' do
      expect(BusinessAnalytics)
        .to receive(:new)
        .with(
          business_slug: 'business-slug',
          date_interval: nil
        )

      resolver.resolve
    end
  end
end
