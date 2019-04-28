# frozen_string_literal: true

class RemoveCloudinaryIdsFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :logo_id, :string
    remove_column :businesses, :hero_image_id, :string
  end
end
