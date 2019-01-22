class AddDateToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :date, :date, null: false
    add_index :events, :date
  end
end
