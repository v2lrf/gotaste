# frozen_string_literal: true

class CreateEvents < ActiveRecord::Migration[5.2]
  def change
    create_table :events do |t|
      t.string :title, null: false
      t.references :host, foreign_key: { to_table: :businesses }, null: false
      t.datetime :begins_at, null: false
      t.datetime :ends_at
      t.text :description
      t.string :url

      t.timestamps
    end
  end
end
