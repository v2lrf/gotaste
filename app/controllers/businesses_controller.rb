# frozen_string_literal: true

class BusinessesController < ApplicationController
  def index; end

  def show
    render locals: {
      businesses_show: BusinessesShow.new(slug: params[:id])
    }
  end
end
