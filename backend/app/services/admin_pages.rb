# frozen_string_literal: true

class AdminPages
  HIDDEN_PAGES = %w[addresses opening_hours].freeze

  def self.routes(admin)
    admin.resources.reject { |i| i.resource.in?(HIDDEN_PAGES) }
  end
end
