# frozen_string_literal: true

require 'rails_helper'

describe FavouritePolicy do
  let(:favourite) { create :favourite }

  subject { described_class.new(user, favourite) }

  context 'when visitor' do
    let(:user) { nil }

    it { is_expected.to forbid_actions(%i[create destroy]) }
  end

  context 'when user owns favourite' do
    let(:user) { favourite.user }

    it { is_expected.to permit_actions(%i[create destroy]) }
  end

  context 'when user does not own favourite' do
    let(:user) { create :user }

    it { is_expected.to permit_actions(%i[create]) }
    it { is_expected.to forbid_actions(%i[destroy]) }
  end
end
