# frozen_string_literal: true

class CreateAddresses < ActiveRecord::Migration[5.2]
  def change
    create_table :addresses do |t|
      t.references :addressable, polymorphic: true, index: true

      t.string :street_name, null: false
      t.string :street_number, null: false
      t.string :postal_code, null: false
      t.string :city, null: false

      t.float :latitude, null: false
      t.float :longitude, null: false
      t.st_point :coordinate, geographic: true, null: false

      t.timestamps
    end

    add_index :addresses, :coordinate, using: :gist
  end
end
