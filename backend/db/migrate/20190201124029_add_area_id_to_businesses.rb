# frozen_string_literal: true

class AddAreaIdToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :area_id, :integer
    add_index :businesses, :area_id
  end
end
