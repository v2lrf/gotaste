# frozen_string_literal: true

class BusinessPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      scope.all
    end
  end

  def index?
    true
  end

  def show?
    true
  end

  def edit?
    return true if admin? || employee?

    false
  end

  def update?
    edit?
  end

  private

  def employee?
    record.users.include?(user)
  end
end
