class CreateRaces < ActiveRecord::Migration[6.0]
  def change
    create_table :races do |t|
      t.string :index
      t.string :name
      t.integer :speed
      t.json :ability_bonuses
      t.json :ability_bonus_options
      t.text :alignment
      t.text :age
      t.string :size
      t.text :size_description
      t.json :starting_proficiencies
      t.json :starting_proficiency_options
      t.json :languages
      t.json :language_options
      t.text :language_desc
      t.json :traits
      t.json :trait_options
      t.json :subraces
      t.string :url

      t.timestamps
    end
  end
end
