# frozen_string_literal: true

class EventsController < ApplicationController
  def show
    render locals: {
      events_show: EventsShow.new(slug: params[:id])
    }
  end
end
