# frozen_string_literal: true

class DisablePostgis < ActiveRecord::Migration[5.2]
  def change
    disable_extension :postgis
  end
end
