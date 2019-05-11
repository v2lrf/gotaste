# frozen_string_literal: true

class MakeLatitudeAndLongitudeNotNull < ActiveRecord::Migration[5.2]
  def change
    change_column_null(:areas, :latitude, false)
    change_column_null(:areas, :longitude, false)
  end
end
