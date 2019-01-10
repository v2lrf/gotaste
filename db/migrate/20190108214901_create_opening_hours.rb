class CreateOpeningHours < ActiveRecord::Migration[5.2]
  def change
    create_table :opening_hours do |t|
      t.references :business, foreign_key: true
      t.integer :day_of_week, null: false
      t.time :open
      t.time :close

      t.timestamps
    end
  end
end
