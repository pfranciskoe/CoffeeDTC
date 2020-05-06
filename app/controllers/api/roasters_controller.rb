class Api::RoastersController < ApplicationController
    def show
        @roaster = Dtcoffee.find_by(id:params[:id]).roaster
        render :show
    end
    def index
        @roasters = Roaster.all
    end
end
