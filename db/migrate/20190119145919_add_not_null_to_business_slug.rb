class AddNotNullToBusinessSlug < ActiveRecord::Migration[5.2]
  def change
    change_column_null :businesses, :slug, false
  end
end
