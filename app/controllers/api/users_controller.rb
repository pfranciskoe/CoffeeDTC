class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            @cart = Cart.create!(user_id:current_user.id)
            render :show
        else
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = wanted_user
    end


    private
    def wanted_user
        User.find(params[:id])
    end

    def user_params
            params.require(:user).permit(:password,:email)
    end
end
 