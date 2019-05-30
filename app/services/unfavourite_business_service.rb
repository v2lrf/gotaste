# frozen_string_literal: true

class UnfavouriteBusinessService
  def initialize(business:, user:)
    @business = business
    @user     = user
  end

  def call
    favourite = user.favourites.find_by!(business: business)

    favourite.destroy
  end

  private

  attr_reader :business, :user
end
