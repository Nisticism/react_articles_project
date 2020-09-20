Rails.application.routes.draw do
  #  api to be articles.com/api/v1/resource
  post "/api/v1/login", to: "api/v1/sessions#create"
  get "/api/v1/get_current_user", to: "api/v1/sessions#get_current_user"
  namespace :api do
    namespace :v1 do
      resources :users
      resources :articles
      resources :comments
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
