# frozen_string_literal: true

require 'rails_helper'

describe EventPolicy do
  let(:event) { create :event }

  subject { described_class.new(user, event) }

  context 'when visitor' do
    let(:user) { nil }

    it { is_expected.to permit_actions(%i[index show]) }
    it { is_expected.to forbid_actions(%i[new create edit update destroy]) }
  end

  context 'when admin' do
    let(:user) { create :user, :admin }

    it do
      is_expected
        .to permit_actions(%i[index show new create edit update destroy])
    end
  end

  context 'when business owner' do
    let(:business) { event.host }
    let(:employee) { create :employee, business: business }
    let(:user)     { employee.user }

    it do
      is_expected
        .to permit_actions(%i[index show new create edit update destroy])
    end
  end

  context 'when owner of another business' do
    let(:business) { create :business }
    let(:employee) { create :employee, business: business }
    let(:user)     { employee.user }

    it { is_expected.to permit_actions(%i[index show]) }
    it { is_expected.to forbid_actions(%i[new create edit update destroy]) }
  end
end
