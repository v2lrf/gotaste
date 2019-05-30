# frozen_string_literal: true

require 'rails_helper'

describe UnfavouriteBusinessService do
  let(:user)     { create :user }
  let(:business) { create :business }

  subject(:service) do
    described_class.new(
      user:     user,
      business: business
    )
  end

  describe '#call' do
    context 'when favourite exist' do
      let!(:favourite) { create :favourite, user: user, business: business }

      it 'deletes the favourite' do
        service.call
        expect(user.favourites.count).to eq 0
      end
    end

    context "when favourite doesn't exist" do
      it 'raises RecordNotFound errror' do
        expect { service.call }.to raise_error(ActiveRecord::RecordNotFound)
      end
    end
  end
end
