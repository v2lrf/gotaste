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

  DEFAULT_HERO_IMAGE_ID = 'default'

  def image_path
    image_id.to_s
  end

  def image_id
    hero_image_id.presence || DEFAULT_HERO_IMAGE_ID
  end
end
