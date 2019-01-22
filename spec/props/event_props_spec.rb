# frozen_string_literal: true

require 'rails_helper'

describe EventProps do
  describe '.for' do
    let(:event) do
      instance_double(
        'event',
        title:     'Name',
        slug:      'name',
        date:      Date.tomorrow,
        begins_at: '18:00',
        ends_at:   '20:00'
      )
    end

    it 'returns a hash with the correct props' do
      expect(EventProps.for(event)).to eq(
        title:     'Name',
        slug:      'name',
        date:      Date.tomorrow,
        begins_at: '18:00',
        ends_at:   '20:00'
      )
    end
  end
end
