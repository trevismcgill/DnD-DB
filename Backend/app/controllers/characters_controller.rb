class CharactersController < ApplicationController

    def index
        render :json => Character.all
    end

    def show
        render :json => Character.find_by_id(params[:id])
    end

    def create
        character = Character.new(character_params)
        if character.save
            render json: character
        end
    end

    private

    def character_params
        params.require(:character).permit(:name, :age, :alignment, :height, :weight, :character_klass, :race)
    end
end
