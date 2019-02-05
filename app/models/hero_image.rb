# frozen_string_literal: true

class HeroImage
  def initialize(hero_image_id: nil)
    @hero_image_id = hero_image_id
  end

  def id
    image_path
  end

  private

  attr_reader :hero_image_id

  CLOUDINARY_HERO_IMAGES_PATH = 'Govinu/hero_images'
  DEFAULT_HERO_IMAGE_ID       = '6229d0ce88881c305df3bcdf60db14e4'

  def image_path
    "#{CLOUDINARY_HERO_IMAGES_PATH}/#{image_id}"
  end

  def image_id
    hero_image_id.presence || DEFAULT_HERO_IMAGE_ID
  end
end
