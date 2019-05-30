# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_event, mutation: Mutations::CreateEvent
    field :favourite_business, mutation: Mutations::FavouriteBusiness
    field :sign_in, mutation: Mutations::SignIn
    field :sign_up, mutation: Mutations::SignUp
    field :update_business, mutation: Mutations::UpdateBusiness
    field :update_event, mutation: Mutations::UpdateEvent
  end
end
