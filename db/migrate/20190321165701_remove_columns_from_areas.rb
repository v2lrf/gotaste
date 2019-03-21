# frozen_string_literal: true

class RemoveColumnsFromAreas < ActiveRecord::Migration[5.2]
  def change
    remove_column :areas, :lft, :integer
    remove_column :areas, :rgt, :integer
  end
end
