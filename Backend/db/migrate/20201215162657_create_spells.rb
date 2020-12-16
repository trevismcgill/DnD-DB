class CreateSpells < ActiveRecord::Migration[6.0]
  def change
    create_table :spells do |t|
      t.string :index
      t.string :name
      t.json :desc
      t.json :higher_level
      t.string :range
      t.json :components
      t.string :material
      t.boolean :ritual
      t.string :duration
      t.boolean :concentration
      t.string :casting_time
      t.integer :level
      t.json :heal_at_slot_level
      t.string :attack_type
      t.json :damage
      t.json :dc
      t.json :area_of_effect
      t.json :school
      t.json :classes
      t.json :subclasses
      t.string :url

      t.timestamps
    end
  end
end
