# frozen_string_literal: true

class AddPriceToEvents < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :price, :decimal, precision: 8,
               scale: 2, default: 0, null: false
  end
end
