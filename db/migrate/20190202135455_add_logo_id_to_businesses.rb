class AddLogoIdToBusinesses < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :logo_id, :string
  end
end
