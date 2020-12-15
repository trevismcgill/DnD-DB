# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_12_15_022055) do

  create_table "character_klasses", force: :cascade do |t|
    t.string "index"
    t.string "name"
    t.integer "hit_die"
    t.string "proficiency_choices"
    t.string "proficiencies"
    t.string "saving_throws"
    t.string "starting_equipment"
    t.string "class_levels"
    t.string "subclasses"
    t.string "spellcasting"
    t.string "spells"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
