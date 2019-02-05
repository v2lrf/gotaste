class AddHeroImageIdToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :hero_image_id, :string
  end
end
