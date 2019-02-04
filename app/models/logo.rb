# frozen_string_literal: true

class Logo
  def initialize(business_logo_id: nil)
    @business_logo_id = business_logo_id
  end

  def id
    logo_path
  end

  private

  attr_reader :business_logo_id

  CLOUDINARY_LOGOS_PATH = 'Govinu/logos'
  DEFAULT_LOGO_ID       = 'default'

  def logo_path
    "#{CLOUDINARY_LOGOS_PATH}/#{logo_id}"
  end

  def logo_id
    business_logo_id.presence || DEFAULT_LOGO_ID
  end
end
