# frozen_string_literal: true

require 'rails_helper'

describe Resolvers::Search do
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
          distance:  2
        }
      end

      it 'calls the near with arguments and explicit distance' do
        expect(Address)
          .to receive(:near).with(
            [args[:latitude], args[:longitude]], args[:distance]
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

      it 'calls the near with arguments and default distance' do
        expect(Address)
          .to receive(:near).with(
            [args[:latitude], args[:longitude]],
            Resolvers::Search::DEFALULT_DISTANCE_IN_KM
          )

        klass.resolve(args)
      end
    end
  end
end
