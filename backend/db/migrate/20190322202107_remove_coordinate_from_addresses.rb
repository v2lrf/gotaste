# frozen_string_literal: true

class RemoveCoordinateFromAddresses < ActiveRecord::Migration[5.2]
  def change
    remove_column :addresses, :coordinate, :st_point, geographic: true
  end
end
