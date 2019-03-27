# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Businesses do
  subject(:klass) do
    described_class.new(
      object:  nil,
      context: {}
    )
  end

  let(:args) do
    {
      order_by: order_by
    }
  end

  let!(:business_a) do
    FactoryBot.create(:business, name: 'A')
  end

  let!(:business_b) do
    FactoryBot.create(:business, name: 'B')
  end

  describe 'order_by argument' do
    context 'when `order_by` is NAME_ASC' do
      let(:order_by) { 'name asc' }

      it 'returns businesses ordered by name in ascending order' do
        expect(klass.resolve(args))
          .to match_array([business_a, business_b])
      end
    end

    context 'when `order_by` is NAME_DESC' do
      let(:order_by) { 'name desc' }

      it 'returns businesses ordered by name in descending order' do
        expect(klass.resolve(args))
          .to match_array([business_b, business_a])
      end
    end
  end
end
