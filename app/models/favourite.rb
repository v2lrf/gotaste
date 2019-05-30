# frozen_string_literal: true

class Favourite < ApplicationRecord
  validates :business_id,
            uniqueness: {
              scope:   :user_id,
              message: 'has already been favourited'
            }

  belongs_to :user
  belongs_to :business
end
