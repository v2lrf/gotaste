# frozen_string_literal: true

class CreateEmployees < ActiveRecord::Migration[5.2]
  def change
    create_table :employees do |t|
      t.references :business, foreign_key: true
      t.references :user, foreign_key: true

      t.timestamps
    end

    add_index :employees, %i[business_id user_id], unique: true
  end
end
