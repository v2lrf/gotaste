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

  has_many :employees, dependent: :nullify
  has_many :businesses, through: :employees
  has_many :favourites, dependent: :destroy

  before_save :ensure_authentication_token

  def short_name
    "#{first_name} #{last_name[0]}."
  end
end
