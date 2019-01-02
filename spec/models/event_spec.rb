# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Event, type: :model do
  it 'has a valid factory' do
    event = FactoryBot.build(:event)
    expect(event).to be_valid
  end
end
