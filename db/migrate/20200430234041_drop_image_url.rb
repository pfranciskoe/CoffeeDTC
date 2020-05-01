class DropImageUrl < ActiveRecord::Migration[5.2]
    def change
    remove_column :dtcoffees, :image_link
    remove_column :roasters, :logo_url
    end
end
