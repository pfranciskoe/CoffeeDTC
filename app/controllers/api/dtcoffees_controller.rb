class Api::DtcoffeesController < ApplicationController
    def show
        @dtcoffee = Dtcoffee.find_by(id:params[:id])
        render :show
    end

    def index
        @dtcoffees = Dtcoffee.all
        render :index
    end
end
