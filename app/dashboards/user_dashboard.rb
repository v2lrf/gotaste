# frozen_string_literal: true

require 'administrate/base_dashboard'

class UserDashboard < Administrate::BaseDashboard
  def display_resource(user)
    user.email
  end

  # ATTRIBUTE_TYPES
  # a hash that describes the type of each of the model's fields.
  #
  # Each different type represents an Administrate::Field object,
  # which determines how the attribute is displayed
  # on pages throughout the dashboard.
  ATTRIBUTE_TYPES = {
    id:                              Field::Number,
    email:                           Field::String,
    encrypted_password:              Field::String,
    reset_password_token:            Field::String,
    reset_password_sent_at:          Field::DateTime,
    remember_created_at:             Field::DateTime,
    first_name:                      Field::String,
    last_name:                       Field::String,
    role:                            SelectField.with_options(
      choices: User.roles.keys
    ),
    created_at:                      Field::DateTime,
    updated_at:                      Field::DateTime,
    authentication_token:            Field::Text,
    authentication_token_created_at: Field::DateTime
  }.freeze

  # COLLECTION_ATTRIBUTES
  # an array of attributes that will be displayed on the model's index page.
  #
  # By default, it's limited to four items to reduce clutter on index pages.
  # Feel free to add, remove, or rearrange items.
  COLLECTION_ATTRIBUTES = %i[
    id
    email
    first_name
    last_name
    created_at
  ].freeze

  # SHOW_PAGE_ATTRIBUTES
  # an array of attributes that will be displayed on the model's show page.
  SHOW_PAGE_ATTRIBUTES = %i[
    id
    email
    first_name
    last_name
    role
    reset_password_sent_at
    remember_created_at
    created_at
    updated_at
  ].freeze

  # FORM_ATTRIBUTES
  # an array of attributes that will be displayed
  # on the model's form (`new` and `edit`) pages.
  FORM_ATTRIBUTES = %i[
    email
    first_name
    last_name
    role
  ].freeze

  # Overwrite this method to customize how users are displayed
  # across all pages of the admin dashboard.
  #
  # def display_resource(user)
  #   "User ##{user.id}"
  # end
end
