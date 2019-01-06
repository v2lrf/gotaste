class AddLongitudeLatitudeToBusinesses < ActiveRecord::Migration[5.2]
  def change
    enable_extension 'postgis'
    add_column :businesses, :longitude_latitude, :st_point, geographic: true
    add_index :businesses, :longitude_latitude, using: :gist
  end
end
