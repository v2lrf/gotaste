# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Businesses page', type: :request do
  describe 'GET index' do
    it 'is successful' do
      get businesses_path
      expect(response).to be_successful
    end
  end
end
