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

ActiveRecord::Schema.define(version: 2020_12_15_192610) do

  create_table "character_klasses", force: :cascade do |t|
    t.string "index"
    t.string "name"
    t.integer "hit_die"
    t.json "proficiency_choices"
    t.json "proficiencies"
    t.json "saving_throws"
    t.string "starting_equipment"
    t.string "class_levels"
    t.json "subclasses"
    t.text "spellcasting"
    t.string "spells"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "races", force: :cascade do |t|
    t.string "index"
    t.string "name"
    t.integer "speed"
    t.json "ability_bonuses"
    t.json "ability_bonus_options"
    t.text "alignment"
    t.text "age"
    t.string "size"
    t.text "size_description"
    t.json "starting_proficiencies"
    t.json "starting_proficiency_options"
    t.json "languages"
    t.json "language_options"
    t.text "language_desc"
    t.json "traits"
    t.json "trait_options"
    t.json "subraces"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "spells", force: :cascade do |t|
    t.string "index"
    t.string "name"
    t.text "desc"
    t.text "higher_level"
    t.string "range"
    t.json "components"
    t.string "material"
    t.boolean "ritual"
    t.string "duration"
    t.boolean "concentration"
    t.string "casting_time"
    t.integer "level"
    t.json "heal_at_slot_level"
    t.string "attack_type"
    t.json "damage"
    t.json "dc"
    t.json "area_of_effect"
    t.json "school"
    t.json "classes"
    t.json "subclasses"
    t.string "url"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
