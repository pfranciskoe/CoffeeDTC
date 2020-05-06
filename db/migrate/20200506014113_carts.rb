class Carts < ActiveRecord::Migration[5.2]
  def change
    create_table :carts do |t|
      t.integer :user_id, null:false
      t.timestamps
    end
    add_index :carts, :user_id, unique:true

    create_table :cart_items do |t|
      t.integer :cart_id, null:false
      t.integer :quantity, null:false
      t.integer :coffee_id, null:false
      t.timestamps
    end
    add_index :cart_items, :cart_id
    add_index :cart_items, :quantity
    add_index :cart_items, :coffee_id
  end
end
