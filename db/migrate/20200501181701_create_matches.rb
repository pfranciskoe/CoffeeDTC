class CreateMatches < ActiveRecord::Migration[5.2]
  def change
    create_table :matches do |t|
      t.integer :user_id
      t.integer :coffee_id
      t.timestamps
    end
    add_index :matches, :user_id
    add_index :matches, :coffee_id
  end
end
