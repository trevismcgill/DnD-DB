class SpellsController < ApplicationController

    def index
        render :json => Spell.all
    end

    def show
        render :json => Spell.find_by_id(params[:id])
    end
end
