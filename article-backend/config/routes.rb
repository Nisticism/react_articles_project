Rails.application.routes.draw do
  #  api to be articles.com/api/v1/resource

  namespace :api do
    namespace :v1 do
      resources :users
      resources :articles
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
