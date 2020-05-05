class Api::CartItemsController < ApplicationController
    def create
        @item = CartItem.new(cart_item_params)
        @item.cart_id = current_user.cart.id
        if @item.save
            render :show
        else
             render json: @item.errors.full_messages, status: 401
        end
    end

    def update 
        @item = CartItem.find_by(id:params[:id])
        if @item
            @item.update_attributes(cart_item_params)
            render :show
        else
            render json: ["could not update cart"], status: 400
        end
    end

    def destroy
        @item = CartItem.find_by(id:params[:id])
        @item.destroy
        render :show
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:coffee_id,:quantity)
    end
end
