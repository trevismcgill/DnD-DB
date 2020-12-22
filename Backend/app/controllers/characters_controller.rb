class CharactersController < ApplicationController

    def create
        character = Character.new(character_params)
        if character.save
            render json: character
        end
    end

    private

    def character_params
        params.require(:character).permit()
    end
end
