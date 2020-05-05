# == Schema Information
#
# Table name: cart_items
#
#  id         :bigint           not null, primary key
#  cart_id    :integer          not null
#  coffee_id  :integer          not null
#  quantity   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class CartItem < ApplicationRecord
    belongs_to :cart,
    foreign_key: :cart_id,
    class_name: :Cart,
    dependent: :destroy
    belongs_to :dtcoffee,
    foreign_key: :coffee_id,
    class_name: :Dtcoffee,
    dependent: :destroy
end
