# frozen_string_literal: true

class RemoveAddressColumnsFromBusinesses < ActiveRecord::Migration[5.2]
  def change
    remove_column :businesses, :street_name, :string
    remove_column :businesses, :street_number, :string
    remove_column :businesses, :postal_code, :string
    remove_column :businesses, :city, :string
    remove_column :businesses, :latitude, :float
    remove_column :businesses, :longitude, :float
    remove_column :businesses, :longitude_latitude, :st_point
  end
end
