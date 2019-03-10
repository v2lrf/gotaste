# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :admin do
    resources :addresses
    resources :areas
    resources :businesses
    resources :events
    resources :users, only: %i[index show edit update destroy]

    root to: 'users#index'
  end

  devise_for :users, controllers: { registrations: 'registrations' }

  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  post '/graphql', to: 'graphql#execute'
end
