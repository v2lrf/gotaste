# frozen_string_literal: true

class ApplicationController < ActionController::Base
  include Pundit

  before_action :set_locale
  before_action :authenticate_user!

  private

  def set_locale
    I18n.locale = :da
  end
end
