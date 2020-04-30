class CreateDtcoffees < ActiveRecord::Migration[5.2]
  def change
    create_table :dtcoffees do |t|
      t.string :name, null:false
      t.text :description, null:false
      t.integer :roast, null:false
      t.integer :roaster_id, null:false
      t.integer :weight, null: false
      t.float :price, null:false
      t.boolean :single_origin, null:false
      t.boolean :fair_trade, null:false
      t.string :image_link, null:false
      t.timestamps
    end
    add_index :dtcoffees, :name, unique:true
    add_index :dtcoffees, :roaster_id
  end
end
