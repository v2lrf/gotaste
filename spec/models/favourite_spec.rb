# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Favourite do
  it 'has a valid factory' do
    favourite = FactoryBot.build(:favourite)
    expect(favourite).to be_valid
  end
end
