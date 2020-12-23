class CharactersController < ApplicationController

    def index
        render :json => Character.all
    end

    def show
        render :json => Character.find_by_id(params[:id])
    end

    def create
        character = Character.new(character_params)
        binding.pry
        character_race = Race.find_by(index: params[:character][:race].downcase)
        character_klass = CharacterKlass.find_by(index: params[:character][:character_klass].downcase)
        character.race_id = character_race.id
        character.character_klass_id = character_klass.id
        if character.save
            render json: character
        end
    end

    private

    def character_params
        params.require(:character).permit(:name, :age, :alignment, :height, :weight)
    end
end
