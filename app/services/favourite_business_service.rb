# frozen_string_literal: true

class FavouriteBusinessService
  def initialize(business:, user:)
    @business = business
    @user     = user
  end

  def call
    user.favourites.create(business: business)
  end

  private

  attr_reader :business, :user
end
