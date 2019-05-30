# frozen_string_literal: true

module Resolvers
  module Business
    class ViewerHasFavourited < Resolvers::Base
      description 'Returns a boolean indicating whether the viewing user'\
                  ' has favourited the business.'

      type Boolean, null: false

      def resolve
        return false if current_user.blank?

        Loaders::ForeignKeyLoader.for(Favourite, :business_id).load([object.id])
                                 .then do |favourites|
          favourited_by_user?(favourites)
        end
      end

      private

      def favourited_by_user?(favourites_for_business)
        favourites_for_business.map(&:user_id).include?(current_user.id)
      end
    end
  end
end
