# frozen_string_literal: true

class BusinessProps
  def self.for(business)
    {
      name:    business.name,
      slug:    business.slug,
      address: "#{business.street_name} #{business.street_number}"
    }
  end
end
