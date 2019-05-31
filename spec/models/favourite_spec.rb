# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Favourite do
  it 'has a valid factory' do
    favourite = build(:favourite)
    expect(favourite).to be_valid
  end

  describe 'uniqueness validation on business and user' do
    let(:favourite) { create :favourite }
    let(:new_favourite) do
      build(:favourite, business: favourite.business, user: favourite.user)
    end

    it 'favourite with same business and user is not valid' do
      expect(new_favourite).not_to be_valid
    end
  end
end
