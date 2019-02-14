# frozen_string_literal: true

Rails.application.routes.draw do
  if Rails.env.development?
    mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  end

  post '/graphql', to: 'graphql#execute'

  resource :discover, only: :show
  resources :businesses, only: %i[index show]
  resources :events, only: :show

  root 'landing#index'
end
