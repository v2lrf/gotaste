# frozen_string_literal: true

Geocoder.configure(lookup: :test)

Geocoder::Lookup::Test.set_default_stub(
  [
    {
      'coordinates'  => [55.694068, 12.530929],
      'address'      => 'Trianglen',
      'state'        => 'Copenhagen',
      'state_code'   => 'DK',
      'country'      => 'Denmark',
      'country_code' => 'DK'
    }
  ]
)
