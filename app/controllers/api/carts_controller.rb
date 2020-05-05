class Api::CartsController < ApplicationController
  def show
    @cart_items = Cart.find_by(user_id:current_user.id).cart_items
  end
  def destroy
        @cart = CartItem.find_by(user_id:current_user.id)
        @cart.destroy
        render json: ["Your coffee is on it's way!"], status: 200
  end
end
