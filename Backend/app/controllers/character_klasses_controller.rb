class CharacterKlassesController < ApplicationController

    def index
        render :json => CharacterKlass.all

    end

    def show
        render :json => CharacterKlass.find_by_id(params[:id])
    end
end