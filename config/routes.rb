# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :admin do
    resources :addresses
    resources :areas
    resources :businesses
    resources :employees
    resources :events
    resources :opening_hours
    resources :users, only: %i[index show edit update destroy]

    root to: 'users#index'
  end

  namespace :private, module: 'private_room', as: 'private_room' do
    root to: 'dashboards#index'
  end

  devise_for :users, controllers: { registrations: 'registrations' }

  post '/graphql', to: 'graphql#execute'

  root to: 'welcome#index'
end
