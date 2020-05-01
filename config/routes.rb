Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create,:show]
    resource :session, only: [:create, :destroy]
    resources :taste_profiles, only:[:create,:show,:update]
    resources :roasters, only:[:show]
    resources :dtcoffees, only:[:show,:index]
  end
  root to: 'static_pages#root'
end
