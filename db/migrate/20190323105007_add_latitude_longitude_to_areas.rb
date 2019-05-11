# frozen_string_literal: true

class AddLatitudeLongitudeToAreas < ActiveRecord::Migration[5.2]
  def change
    add_column :areas, :latitude, :float
    add_column :areas, :longitude, :float
  end
end
