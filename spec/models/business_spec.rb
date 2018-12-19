# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Business, type: :model do
  it 'has a valid factory' do
    business = FactoryBot.build(:business)
    expect(business).to be_valid
  end
end
