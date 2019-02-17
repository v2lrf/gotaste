# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::AreaSearch do
  subject(:klass) do
    described_class.new(
      object:  nil,
      context: {}
    )
  end

  describe '#resolve' do
    context 'when distance argument is given' do
      let(:args) do
        {
          latitude:  55.6761,
          longitude: 12.5683,
          distance:  2000
        }
      end

      it 'calls the closest_within with arguments and explicit distance' do
        expect(Area).to receive(:closest_within).with(
          latitude:  args[:latitude],
          longitude: args[:longitude],
          distance:  args[:distance]
        )

        klass.resolve(args)
      end
    end

    context 'when distance argument is not present' do
      let(:args) do
        {
          latitude:  55.6761,
          longitude: 12.5683
        }
      end

      it 'calls the closest_within with arguments and default distance' do
        expect(Area).to receive(:closest_within).with(
          latitude:  args[:latitude],
          longitude: args[:longitude],
          distance:  Resolvers::AreaSearch::DEFALULT_DISTANCE_IN_METERS
        )

        klass.resolve(args)
      end
    end
  end
end
