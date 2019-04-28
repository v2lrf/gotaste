# frozen_string_literal: true

require 'administrate/base_dashboard'

class EventDashboard < Administrate::BaseDashboard
  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    host:                 Field::BelongsTo.with_options(
      class_name:       'Business',
      searchable:       true,
      searchable_field: 'name'
    ),
    id:                   Field::Number,
    name:                 Field::String,
    begins_at:            Field::DateTime,
    ends_at:              Field::DateTime,
    description:          Field::Text,
    url:                  Field::String,
    hero_image:           Field::ActiveStorage,
    created_at:           Field::DateTime,
    updated_at:           Field::DateTime,
    slug:                 Field::String,
    address:              Field::HasOne,
    price:                Field::Number,
    same_address_as_host: Field::Boolean
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    name
    host
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    host
    id
    name
    begins_at
    ends_at
    description
    url
    created_at
    updated_at
    slug
    price
    hero_image
    address
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    host
    name
    begins_at
    ends_at
    description
    url
    price
    hero_image
    same_address_as_host
    address
  ].freeze

  # Overwrite this method to customize how events are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(event)
  #   "Event ##{event.id}"
  # end
end
