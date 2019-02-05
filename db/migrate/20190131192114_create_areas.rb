# frozen_string_literal: true

class CreateAreas < ActiveRecord::Migration[5.2]
  def change
    create_table :areas do |t|
      t.string :name, null: false
      t.string :slug, null: false, index: { unique: true }
      t.st_point :longitude_latitude, geographic: true, null: false
      t.integer :parent_id, null: true, index: true
      t.integer :lft, null: false, index: true
      t.integer :rgt, null: false, index: true

      t.timestamps
    end

    add_index :areas, :longitude_latitude, using: :gist
  end
end
