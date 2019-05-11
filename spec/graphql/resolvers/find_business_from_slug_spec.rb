# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::FindBusinessFromSlug do
  subject(:klass) do
    described_class.new(
      object:  nil,
      context: {}
    )
  end

  describe '#resolve' do
    let!(:business) { FactoryBot.create(:business) }

    context 'when the `slug` argument matches a businss' do
      it 'returns the business' do
        expect(klass.resolve(slug: business.slug)).to eq business
      end
    end

    context "when the `slug` argument doens't match a business" do
      it 'raises not found error' do
        expect { klass.resolve(slug: 'non-matching-slug') }
          .to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
