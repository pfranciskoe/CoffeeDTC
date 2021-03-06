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

ActiveRecord::Schema.define(version: 2020_05_06_014113) do

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

  create_table "cart_items", force: :cascade do |t|
    t.integer "cart_id", null: false
    t.integer "quantity", null: false
    t.integer "coffee_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["cart_id"], name: "index_cart_items_on_cart_id"
    t.index ["coffee_id"], name: "index_cart_items_on_coffee_id"
    t.index ["quantity"], name: "index_cart_items_on_quantity"
  end

  create_table "carts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_carts_on_user_id", unique: true
  end

  create_table "dtcoffees", force: :cascade do |t|
    t.string "name", null: false
    t.text "description", null: false
    t.integer "roast", null: false
    t.integer "roaster_id", null: false
    t.integer "weight", null: false
    t.float "price", null: false
    t.boolean "single_origin", null: false
    t.boolean "fair_trade", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "flavors", null: false
    t.index ["name"], name: "index_dtcoffees_on_name", unique: true
    t.index ["roaster_id"], name: "index_dtcoffees_on_roaster_id"
  end

  create_table "matches", force: :cascade do |t|
    t.integer "user_id"
    t.integer "coffee_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["coffee_id"], name: "index_matches_on_coffee_id"
    t.index ["user_id"], name: "index_matches_on_user_id"
  end

  create_table "roasters", force: :cascade do |t|
    t.string "name", null: false
    t.string "location", null: false
    t.float "lat"
    t.float "lng"
    t.string "description", null: false
    t.string "fun_fact", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_roasters_on_name", unique: true
  end

  create_table "taste_profiles", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "experience_level", null: false
    t.string "brew_method", null: false
    t.string "additions", null: false
    t.integer "roast", null: false
    t.string "adventure", null: false
    t.boolean "ground", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_taste_profiles_on_user_id", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
