# frozen_string_literal: true

require 'rails_helper'

describe AdminPages do
  let(:addresses_page) { double('page', resource: 'addresses') }
  let(:opening_hours_page) { double('page', resource: 'opening_hours') }
  let(:users_page) { double('page', resource: 'users') }

  let(:pages) do
    double('pages', resources: [
             addresses_page,
             opening_hours_page,
             users_page
           ])
  end

  describe '.routes' do
    it 'returns all pages without the hidden pages' do
      expect(AdminPages.routes(pages)).to match_array(users_page)
    end
  end
end
