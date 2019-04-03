# frozen_string_literal: true

class AddShortDescriptionToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :short_description, :string
  end
end
