class Character < ApplicationRecord
    belongs_to :character_klass
    belongs_to :race
end
