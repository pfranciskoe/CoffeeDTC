class Api::TasteProfilesController < ApplicationController
    def create
        @taste_profile = TasteProfile.new(profile_params)
        if @taste_profile.save
            delete_old_matches(@taste_profile)
            create_matches(@taste_profile)
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
            delete_old_matches(@taste_profile)
            create_matches(@taste_profile)
            render :show
        else
            render json: ["#{params}"], status: 400
        end

    end
    

    
    private

    def delete_old_matches(taste_profile)
        old_matches = Match.where("user_id = ?",taste_profile.user_id)
        old_matches.each {|match| match.destroy}
    end
    def create_matches(taste_profile)
        roast_range = taste_profile.get_match_params[0]
        price_range = taste_profile.get_match_params[1]
        matched_coffees = Dtcoffee.where("price >= ? AND price <= ? AND
                            roast >= ? AND roast <= ?",price_range[0],
                            price_range[1],roast_range[0],roast_range[1]).limit(5)
        matched_coffees.each do |matched|
            Match.create!(coffee_id: matched.id, user_id: taste_profile.user_id)
        end
    end

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
