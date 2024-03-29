# frozen_string_literal: true

class AddSlugToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :slug, :string, null: false
    add_index :events, :slug, unique: true
  end
end
