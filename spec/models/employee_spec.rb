# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Employee, type: :model do
  it 'has a valid factory' do
    employee = build(:employee)
    expect(employee).to be_valid
  end

  it 'validates user can only belong to the same business once' do
    employee = create(:employee)
    another_employee = build(
      :employee, business: employee.business, user: employee.user
    )

    expect(another_employee).not_to be_valid
  end
end
