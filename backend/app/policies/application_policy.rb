# frozen_string_literal: true

class ApplicationPolicy
  attr_reader :user, :record

  class Scope
    attr_reader :user, :scope

    def initialize(user, scope)
      @user = user
      @scope = scope
    end

    def resolve
      scope.all
    end
  end

  def initialize(user, record)
    @user = user
    @record = record
  end

  def index?
    admin?
  end

  def show?
    admin?
  end

  def create?
    admin?
  end

  def new?
    admin?
  end

  def update?
    admin?
  end

  def edit?
    admin?
  end

  def destroy?
    admin?
  end

  private

  def admin?
    user&.admin?
  end
end
