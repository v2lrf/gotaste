# frozen_string_literal: true

class Employee < ApplicationRecord
  validates :user_id, uniqueness: :business_id

  belongs_to :business
  belongs_to :user
end
