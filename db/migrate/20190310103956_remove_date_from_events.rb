# frozen_string_literal: true

class RemoveDateFromEvents < ActiveRecord::Migration[5.2]
  def change
    remove_column :events, :date, :date
  end
end
