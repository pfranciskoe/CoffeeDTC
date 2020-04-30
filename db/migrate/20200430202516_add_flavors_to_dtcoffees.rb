class AddFlavorsToDtcoffees < ActiveRecord::Migration[5.2]
  def change
    add_column :dtcoffees, :flavors, :string, null:false
  end
end
