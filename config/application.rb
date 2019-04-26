# frozen_string_literal: true

require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module Govinu
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 6.0

    # Settings in config/environments/*
    # take precedence over those specified here.
    # Application configuration can go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded after loading
    # the framework and any gems in your application.
    config.time_zone = 'UTC'

    # Don't generate system test files.
    config.generators.system_tests = nil

    config.action_mailer.delivery_method = :postmark
    config.action_mailer.postmark_settings = {
      api_token: ENV['POSTMARK_API_KEY']
    }

    config.i18n.default_locale = :en
    config.i18n.available_locales = %i[en da]

    config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins ENV['REQUEST_ORIGINS']
        resource '*', headers: :any, methods: %i[get post options]
      end
    end
  end
end
