# frozen_string_literal: true

require 'administrate/base_dashboard'

class BusinessDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    area:          Field::BelongsTo,
    events:        Field::HasMany,
    opening_hours: Field::HasMany,
    id:            Field::Number,
    name:          Field::String,
    website:       Field::String,
    phone_number:  Field::String,
    description:   Field::String,
    created_at:    Field::DateTime,
    updated_at:    Field::DateTime,
    business_type: SelectField.with_options(
      choices: Business.business_types.keys
    ),
    slug:          Field::String,
    logo_id:       Field::String,
    hero_image_id: Field::String,
    address:       Field::HasOne
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    name
    area
    website
    phone_number
    business_type
    slug
    logo_id
    hero_image_id
    created_at
    updated_at
    description
    address
    events
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    name
    area
    website
    phone_number
    business_type
    logo_id
    hero_image_id
    description
    address
    events
  ].freeze

  # Overwrite this method to customize how businesses are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(business)
  #   "Business ##{business.id}"
  # end
end
