# frozen_string_literal: true

require 'ostruct'
require 'yaml'

all_config = YAML.load_file(Rails.root.join('config', 'app.yml')) || {}
env_config = all_config[Rails.env] || {}
AppConfig = OpenStruct.new(env_config)
