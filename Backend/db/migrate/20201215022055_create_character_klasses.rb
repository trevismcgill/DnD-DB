class CreateCharacterKlasses < ActiveRecord::Migration[6.0]
  def change
    create_table :character_klasses do |t|
      t.string :index
      t.string :name
      t.integer :hit_die
      t.json :proficiency_choices
      t.json :proficiencies
      t.json :saving_throws
      t.string :starting_equipment
      t.string :class_levels
      t.json :subclasses
      t.json :spellcasting
      t.string :spells
      t.string :url

      t.timestamps
    end
  end
end
