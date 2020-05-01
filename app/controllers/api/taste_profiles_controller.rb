class Api::TasteProfilesController < ApplicationController
    def create
        @taste_profile = TasteProfile.new(profile_params)
        if @taste_profile.save
            render :show
        else
            render json: @taste_profile.errors.full_messages, status: 401
        end
    end

    def show
        @taste_profile = TasteProfile.find_by(user_id: params[:id])
        render :show
    end

    def update

        @taste_profile = TasteProfile.find_by(user_id: profile_params['user_id'])
        if @taste_profile
            @taste_profile.update_attributes(profile_params)
            render :show
        else
            render json: ["#{params}"], status: 400
        end

    end

    



    private
    def profile_params
        params.require(:taste_profile).permit(
            :user_id,
            :experience_level,
            :brew_method,
            :additions,
            :roast,
            :adventure,
            :ground
        )
    end
end
