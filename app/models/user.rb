# frozen_string_literal: true

class User < ApplicationRecord
  has_secure_password

  enum role: {
    user:  0,
    owner: 1,
    admin: 2
  }

  validates :first_name, :last_name, presence: true
  validates :email, presence: true, uniqueness: true
end
