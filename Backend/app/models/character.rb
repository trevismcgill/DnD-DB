class Character < ApplicationRecord
    has_many: character_klasses
    has_one: race
end
