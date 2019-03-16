# frozen_string_literal: true

class AddSameAddressAsHostToEvent < ActiveRecord::Migration[5.2]
  def change
    add_column :events, :same_address_as_host, :boolean,
               default: true,
               null:    false
  end
end
