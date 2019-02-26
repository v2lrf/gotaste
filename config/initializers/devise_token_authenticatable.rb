# frozen_string_literal: true

Devise::TokenAuthenticatable.setup do |config|
  config.token_expires_in = 1.day
end
