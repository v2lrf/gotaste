import cloudinary from 'cloudinary-core'

const CLOUDINARY_CLOUD_NAME = 'dkrjpli3y'
const cl = cloudinary.Cloudinary.new({ cloud_name: CLOUDINARY_CLOUD_NAME })

const config = {
  HERO_IMAGE_URL: cl.url(
    '/Govinu/hero_images/f0f02c8573be5de9dd53c49f3cd28656',
    {
      width: 1600,
      height: 600,
      crop: 'fit'
    }
  ),
  DEFAULT_LATITUDE: 55.6753,
  DEFAULT_LONGITUDE: 12.5703,
  DEFAULT_DISTANCE: 6000,
  cloudinaryCloudName: CLOUDINARY_CLOUD_NAME
}

export default config
