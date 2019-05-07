const cloudinary = require('cloudinary-core')

const CLOUDINARY_CLOUD_NAME = 'dkrjpli3y'
const cl = cloudinary.Cloudinary.new({ cloud_name: CLOUDINARY_CLOUD_NAME })

const config = {
  DEV_ENDPOINT: 'http://localhost:4000/graphql',
  PROD_ENDPOINT: 'https://api.gotaste.dk/graphql',
  DEV_API_ENDPOINT: 'http://localhost:4000',
  PROD_API_ENDPOINT: 'https://api.gotaste.dk',
  GOVINU_DOMAIN: 'https://gotaste.dk',
  HERO_IMAGE_URL: cl.url(
    '/GoTaste/hero_images/f0f02c8573be5de9dd53c49f3cd28656',
    {
      width: 1600,
      height: 540,
      crop: 'fit',
      secure: true
    }
  ),
  DEFAULT_LATITUDE: 55.6753,
  DEFAULT_LONGITUDE: 12.5703,
  DEFAULT_DISTANCE: 6000,
  cloudinaryCloudName: CLOUDINARY_CLOUD_NAME,
  DEFAULT_META_KEYWORDS: [
    'gotaste',
    'vin',
    'god vin',
    'vinsmagning',
    'blindsmagning'
  ]
}

module.exports = config
