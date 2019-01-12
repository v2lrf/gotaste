# frozen_string_literal: true

source 'https://rubygems.org'
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby '2.5.3'

gem 'activerecord-postgis-adapter'
gem 'bootsnap', '>= 1.1.0', require: false
gem 'devise'
gem 'graphql'
gem 'graphql-batch'
gem 'js-routes'
gem 'oj'
gem 'pg', '>= 0.18', '< 2.0'
gem 'postmark-rails'
gem 'puma', '~> 3.11'
gem 'rails', '~> 5.2.2'
gem 'rollbar'
gem 'rubocop', require: false
gem 'sass-rails', '~> 5.0'
gem 'uglifier', '>= 1.3.0'
gem 'webpacker'

group :development, :test do
  gem 'byebug', platforms: %i[mri mingw x64_mingw]
  gem 'dotenv-rails'
  gem 'factory_bot_rails'
  gem 'pry-byebug'
  gem 'pry-rails', '~> 0.3.9'
  gem 'rails-controller-testing'
  gem 'rb-readline', '~> 0.5.5'
  gem 'rspec-rails', '~> 3.8'
end

group :development do
  gem 'graphiql-rails'
  gem 'letter_opener'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'web-console', '>= 3.3.0'
end

gem 'tzinfo-data', platforms: %i[mingw mswin x64_mingw jruby]
