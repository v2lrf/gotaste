# frozen_string_literal: true

class RemoveLongitudeLatitudeFromAreas < ActiveRecord::Migration[5.2]
  def change
    remove_column :areas, :longitude_latitude, :st_point, geographic: true
  end
end
