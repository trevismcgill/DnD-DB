# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# def create_characterklass_models
#     base_url = "http://www.dnd5eapi.co"
#     response = RestClient.get("#{base_url}/api/classes")
#     dnd_klasses_hash = JSON.parse(response.body, symbolize_names:true)
#     dnd_klasses_array = dnd_klasses_hash[:results]

#     dnd_klasses_array.collect do |klass|
#         response = RestClient.get("#{base_url}#{klass[:url]}")
#         dnd_klass_specific_hash = JSON.parse(response.body, symbolize_names:true)
#         CharacterKlass.create!(dnd_klass_specific_hash)
#     end
# end

# def create_spell_models
#     base_url = "http://www.dnd5eapi.co"
#     response = RestClient.get("#{base_url}/api/spells")
#     spells_hash = JSON.parse(response.body, symbolize_names:true)
#     spells_array = spells_hash[:results]
    
#     spells_array.collect do |spell|
#       response = RestClient.get("#{base_url}#{spell[:url]}")
#       individual_spell_hash = JSON.parse(response.body, symbolize_names:true)
#       Spell.create!(individual_spell_hash)
#     end
# end

# def create_race_models
#     base_url = "http://www.dnd5eapi.co"
#     response = RestClient.get("#{base_url}/api/races")
#     dnd_races_hash = JSON.parse(response.body, symbolize_names:true)
#     dnd_races_array = dnd_races_hash[:results]
    
#     dnd_races_array.collect do |race|
#         response = RestClient.get("#{base_url}#{race[:url]}")
#         dnd_race_specific_hash = JSON.parse(response.body, symbolize_names:true)
#         Race.create!(dnd_race_specific_hash)
#     end
# end

# create_characterklass_models
# create_spell_models
# create_race_models
