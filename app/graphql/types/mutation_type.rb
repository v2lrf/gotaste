# frozen_string_literal: true

module Types
  class MutationType < Types::BaseObject
    field :create_event, mutation: Mutations::CreateEvent
    field :favourite_business, mutation: Mutations::FavouriteBusiness
    field :sign_in, mutation: Mutations::SignIn
    field :sign_up, mutation: Mutations::SignUp
    field :unfavourite_business, mutation: Mutations::UnfavouriteBusiness
    field :update_business, mutation: Mutations::UpdateBusiness
    field :update_event, mutation: Mutations::UpdateEvent
    field :update_opening_hours, mutation: Mutations::UpdateOpeningHours
  end
end
