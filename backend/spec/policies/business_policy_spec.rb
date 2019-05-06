# frozen_string_literal: true

require 'rails_helper'

describe BusinessPolicy do
  let(:business) { create :business }

  subject { described_class.new(user, business) }

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
    let(:employee) { create :employee, business: business }
    let(:user)     { employee.user }

    it { is_expected.to permit_actions(%i[index show edit update]) }
    it { is_expected.to forbid_actions(%i[new create destroy]) }
  end
end
