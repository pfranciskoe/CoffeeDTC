class Api::CartsController < ApplicationController
  def show
    @cart_items = Cart.find_by(user_id:current_user.id).cart_items
  end
  def destroy
        @cart = Cart.find_by(user_id:current_user.id)
        if @cart.destroy
          @cart= Cart.create!(user_id:current_user.id)
          @cart_items = []
        render :show
        end

  end
end
