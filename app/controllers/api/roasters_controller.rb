class Api::RoastersController < ApplicationController
    def show
        @roaster = roaster.find_by(id:params[:id])
        render :show
    end
end
