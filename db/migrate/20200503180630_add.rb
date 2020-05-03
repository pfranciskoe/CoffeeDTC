class Add < ActiveRecord::Migration[5.2]
  def change
    add_column :dtcoffees, :roast, :integer, null:false
  end
end
