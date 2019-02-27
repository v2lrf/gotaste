# frozen_string_literal: true

class User < ApplicationRecord
  enum role: {
    user:  0,
    owner: 1,
    admin: 2
  }

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :token_authenticatable

  validates :first_name, :last_name, presence: true

  before_save :ensure_authentication_token

  def short_name
    "#{first_name} #{last_name[0]}."
  end
end
