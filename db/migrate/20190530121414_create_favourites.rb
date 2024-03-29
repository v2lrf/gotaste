class CreateFavourites < ActiveRecord::Migration[5.2]
  def change
    create_table :favourites do |t|
      t.references :user, foreign_key: true
      t.references :business, foreign_key: true

      t.timestamps
    end

    add_index :favourites, %w[user_id business_id], unique: true
  end
end
