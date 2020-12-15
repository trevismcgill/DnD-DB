class CreateCharacterKlasses < ActiveRecord::Migration[6.0]
  def change
    create_table :character_klasses do |t|
      t.string :index
      t.string :name
      t.integer :hit_die
      t.string :proficiency_choices
      t.string :proficiencies
      t.string :saving_throws
      t.string :starting_equipment
      t.string :class_levels
      t.string :subclasses
      t.string :spellcasting
      t.string :spells
      t.string :url

      t.timestamps
    end
  end
end
