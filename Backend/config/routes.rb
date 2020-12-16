Rails.application.routes.draw do
  resources :characters
  resources :races, only: [:index, :show]
  resources :spells, only: [:index, :show]
  resources :character_klasses, :path => "classes", only: [:index, :show]
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
