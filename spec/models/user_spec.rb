# frozen_string_literal: true

require 'rails_helper'

RSpec.describe User, type: :model do
  it 'has a valid factory' do
    user = FactoryBot.build(:user)
    expect(user).to be_valid
  end

  describe '#short_name' do
    it 'returns the first name and the first letter of last name' do
      user = FactoryBot.build(:user)
      expect(user.short_name).to eq 'Jens H.'
    end
  end
end
