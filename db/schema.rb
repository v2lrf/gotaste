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

ActiveRecord::Schema.define(version: 2019_01_08_214901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"
  enable_extension "postgis"

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "street_name", null: false
    t.string "street_number", null: false
    t.string "postal_code", null: false
    t.string "city", null: false
    t.string "website"
    t.string "phone_number"
    t.string "description"
    t.float "latitude", null: false
    t.float "longitude", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "business_type", null: false
    t.geography "longitude_latitude", limit: {:srid=>4326, :type=>"st_point", :geographic=>true}
    t.index ["business_type"], name: "index_businesses_on_business_type"
    t.index ["longitude_latitude"], name: "index_businesses_on_longitude_latitude", using: :gist
    t.index ["name"], name: "index_businesses_on_name", unique: true
  end

  create_table "events", force: :cascade do |t|
    t.string "title", null: false
    t.bigint "host_id", null: false
    t.datetime "begins_at", null: false
    t.datetime "ends_at"
    t.text "description"
    t.string "url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["host_id"], name: "index_events_on_host_id"
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
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

  add_foreign_key "events", "businesses", column: "host_id"
  add_foreign_key "opening_hours", "businesses"
end
