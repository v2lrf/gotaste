class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false, index: { unique: true }
      t.string :street_name, null: false
      t.string :street_number, null: false
      t.string :postal_code, null: false
      t.string :city, null: false
      t.string :website
      t.string :phone_number
      t.string :description
      t.float :latitude, null: false
      t.float :longitude, null: false

      t.timestamps
    end
  end
end
