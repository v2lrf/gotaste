# frozen_string_literal: true

require 'rails_helper'

RSpec.describe Mutations::CreateUser do
  subject(:mutation) do
    described_class.new(object: nil, context: {})
  end

  describe '#resolve' do
    let(:args) do
      {
        email:      'some_email@example.com',
        password:   'secretPassword',
        first_name: 'Jens',
        last_name:  'Hansen'
      }
    end

    it 'creates a new user' do
      expect { mutation.resolve(args) }.to change { User.count }.by 1
    end
  end
end
