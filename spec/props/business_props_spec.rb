# frozen_string_literal: true

require 'rails_helper'

describe BusinessProps do
  describe '.for' do
    let(:business) do
      instance_double(
        'business',
        name:          'Name',
        slug:          'name',
        street_name:   'Street Name',
        street_number: '1'
      )
    end

    it 'returns a hash with the correct props' do
      expect(BusinessProps.for(business)).to eq(
        name:    'Name',
        slug:    'name',
        address: 'Street Name 1'
      )
    end
  end
end
