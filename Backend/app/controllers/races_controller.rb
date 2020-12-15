class RacesController < ApplicationController

    def index
        render :json => Race.all
    end

    def show
        render :json => Race.find_by_id(params[:id])
    end
end
