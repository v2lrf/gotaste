# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Address do
  it 'has a valid factory' do
    address = FactoryBot.build(:address)
    expect(address).to be_valid
  end
end
