class Api::DtcoffeesController < ApplicationController
    def show
        @dtcoffee = Dtcoffee.find_by(id:params[:id])
        render :show
    end

    Dtcoffee.where()
end
