# frozen_string_literal: true

class FavouritePolicy < ApplicationPolicy
  def create?
    return false if user.blank?

    true
  end

  def destroy?
    return false if user.blank?

    record.user == user
  end
end
