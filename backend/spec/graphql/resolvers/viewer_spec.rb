# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Viewer do
  let(:current_user) { instance_double('user') }

  subject(:klass) do
    described_class.new(
      object:  nil,
      context: { current_user: current_user }
    )
  end

  describe '#resolve' do
    it 'returns the current user from the context' do
      expect(klass.resolve).to eq current_user
    end
  end
end
