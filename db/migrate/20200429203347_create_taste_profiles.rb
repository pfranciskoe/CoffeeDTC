class CreateTasteProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :taste_profiles do |t|
      t.integer :user_id, null: false
      t.integer :experience_level, null: false
      t.string :brew_method, null: false
      t.string :additions, null: false
      t.integer :roast, null: false
      t.string :adventure, null: false
      t.boolean :ground, null:false
      t.timestamps
    end
    add_index :taste_profiles, :user_id, unique:true
  end
end
