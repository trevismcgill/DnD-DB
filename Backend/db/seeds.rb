# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



def character_klasses
    base_url = "http://www.dnd5eapi.co"
    response = RestClient.get("#{base_url}/api/classes")
    dnd_klasses_hash = JSON.parse(response.body, symbolize_names:true)
    dnd_klasses_array = dnd_klasses_hash[:results]

    dnd_klasses_array.collect do |klass|
        binding.pry
        response = RestClient.get("#{base_url}#{klass[:url]}")
        dnd_klass_specific_hash = JSON.parse(response.body, symbolize_names:true)
        CharacterKlass.new(dnd_klass_specific_hash)
    end
end

character_klasses
