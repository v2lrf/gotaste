# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.6.2'

gem 'activestorage-cloudinary-service'
gem 'administrate'
gem 'administrate-field-active_storage'
gem 'administrate-field-nested_has_many'
gem 'ahoy_matey'
gem 'apollo-tracing'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'cloudinary', require: false
gem 'devise'
gem 'devise-token_authenticatable'
gem 'friendly_id'
gem 'geocoder'
gem 'graphql'
gem 'graphql-batch'
gem 'graphql-errors'
gem 'js-routes'
gem 'oj'
gem 'pg', '>= 0.18', '< 2.0'
gem 'postmark-rails'
gem 'puma', '~> 3.11'
gem 'pundit'
gem 'rack-cors', require: 'rack/cors'
gem 'rails', '~> 5.2.2'
gem 'rails-i18n'
gem 'rollbar'
gem 'rubocop', require: false
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'pry-byebug'
  gem 'pry-rails', '~> 0.3.9'
  gem 'pundit-matchers', '~> 1.6.0'
  gem 'rspec-rails', '~> 3.8'
end

group :development do
  gem 'guard-rake'
  gem 'guard-rspec', require: false
  gem 'letter_opener'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end
