class Api::CartItemsController < ApplicationController
    def create
        @item = CartItem.find_by(id:duplicate_cart_coffee?(cart_item_params))
        if @item
            @item.update_attributes(
                quantity:(cart_item_params[:quantity].to_i + @item.quantity)
                )
            render :show
        else
            @item = CartItem.new(cart_item_params)
            @item.cart_id = current_user.cart.id
            if @item.save
                render :show
            else
                render json: @item.errors.full_messages, status: 401
            end
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
    def duplicate_cart_coffee?(cart_item_params)
        cart_item = current_user.carted_coffees.where('coffee_id=?',cart_item_params[:coffee_id])
        if cart_item.length >= 1
            return cart_item.as_json[0]['id']
        else
            return false
        end
    end

    def cart_item_params
        params.require(:cart_item).permit(:coffee_id,:quantity)
    end
end
