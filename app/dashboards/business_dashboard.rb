# frozen_string_literal: true

require 'administrate/base_dashboard'

class BusinessDashboard < Administrate::BaseDashboard
  def display_resource(business)
    business.name
  end

  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    area:              Field::BelongsTo,
    events:            Field::HasMany,
    employees:         Field::HasMany,
    id:                Field::Number,
    name:              Field::String,
    website:           Field::String,
    phone_number:      Field::String,
    description:       Field::Text,
    short_description: Field::Text,
    created_at:        Field::DateTime,
    updated_at:        Field::DateTime,
    business_type:     SelectField.with_options(
      choices: Business.business_types.keys
    ),
    slug:              Field::String,
    logo:              Field::ActiveStorage,
    hero_image:        Field::ActiveStorage,
    address:           Field::HasOne
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    name
    slug
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
    logo
    hero_image
    created_at
    updated_at
    description
    address
    events
    employees
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
    logo
    hero_image
    description
    short_description
    address
    employees
  ].freeze

  # Overwrite this method to customize how businesses are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(business)
  #   "Business ##{business.id}"
  # end
end
