# frozen_string_literal: true

Geocoder.configure(
  lookup:  :mapbox,
  api_key: ENV['MAP_BOX_BACKEND_TOKEN'],
  units:   :km
)
