# frozen_string_literal: true

require 'json'

namespace :graphql do
  desc 'Dumps the IDL schema into ./app/graphql/schema.graphql'
  task dump: :environment do
    target = Rails.root.join('app', 'graphql', 'schema.graphql')
    schema = GraphQL::Schema::Printer.print_schema(GovinuSchema)
    File.open(target, 'w+') do |f|
      f.write(schema)
    end

    puts 'Schema dumped into app/graphql/schema.graphql'
  end
end
