class CreateCharacters < ActiveRecord::Migration[6.0]
  def change
    create_table :characters do |t|
      t.references :character_klass
      t.references :race
      t.string :name
      t.string :age
      t.string :alignment
      t.string :height
      t.string :weight

      t.timestamps
    end
  end
end
