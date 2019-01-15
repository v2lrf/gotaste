# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Discover page', type: :request do
  it 'is successful' do
    get discover_path
    expect(response).to be_success
  end
end
