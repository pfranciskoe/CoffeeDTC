class CreateRoasters < ActiveRecord::Migration[5.2]
  def change
    create_table :roasters do |t|
      t.string :name, null:false
      t.string :location, null:false
      t.string :logo_url, null:false
      t.float :lat
      t.float :lng
      t.string :description, null:false
      t.string :fun_fact, null:false
      t.timestamps 
    end
    add_index :roasters, :name, unique:true
  end
end
