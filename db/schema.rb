# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_03_26_192358) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "addresses", force: :cascade do |t|
    t.string "addressable_type"
    t.bigint "addressable_id"
    t.string "street_name", null: false
    t.string "street_number", null: false
    t.string "postal_code", null: false
    t.string "city", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["addressable_type", "addressable_id"], name: "index_addresses_on_addressable_type_and_addressable_id"
  end

  create_table "areas", force: :cascade do |t|
    t.string "name", null: false
    t.string "slug", null: false
    t.integer "parent_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.index ["parent_id"], name: "index_areas_on_parent_id"
    t.index ["slug"], name: "index_areas_on_slug", unique: true
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "website"
    t.string "phone_number"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "business_type", null: false
    t.string "slug", null: false
    t.integer "area_id"
    t.index ["area_id"], name: "index_businesses_on_area_id"
    t.index ["business_type"], name: "index_businesses_on_business_type"
    t.index ["name"], name: "index_businesses_on_name", unique: true
    t.index ["slug"], name: "index_businesses_on_slug", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "name", null: false
    t.bigint "host_id", null: false
    t.datetime "begins_at", null: false
    t.datetime "ends_at"
    t.text "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "slug", null: false
    t.decimal "price", precision: 8, scale: 2, default: "0.0", null: false
    t.boolean "same_address_as_host", default: true, null: false
    t.index ["host_id"], name: "index_events_on_host_id"
    t.index ["slug"], name: "index_events_on_slug", unique: true
  end

  create_table "opening_hours", force: :cascade do |t|
    t.bigint "business_id"
    t.integer "day_of_week", null: false
    t.time "open"
    t.time "close"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["business_id"], name: "index_opening_hours_on_business_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.integer "role", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "authentication_token"
    t.datetime "authentication_token_created_at"
    t.index ["authentication_token"], name: "index_users_on_authentication_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
  add_foreign_key "events", "businesses", column: "host_id"
  add_foreign_key "opening_hours", "businesses"
end
