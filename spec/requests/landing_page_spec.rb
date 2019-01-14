# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Landing page', type: :request do
  describe 'require_admin!' do
    subject { get root_path }

    context 'when env is production' do
      before do
        allow(Rails).to receive(:env) { 'production'.inquiry }
      end

      context 'when user is not signed in' do
        it 'renders "coming soon"' do
          expect(subject).to render_template('landing/_coming_soon')
        end
      end

      context 'when user is signed in' do
        it 'renders "coming soon"' do
          sign_in FactoryBot.create(:user)
          expect(subject).to render_template('landing/_coming_soon')
        end

        context 'when user is an admin' do
          it 'renders the index template' do
            sign_in FactoryBot.create(:user, :admin)
            expect(subject).to render_template(:index)
          end
        end
      end
    end

    context 'when env is not production' do
      it 'renders the index template' do
        sign_in FactoryBot.create(:user)
        expect(subject).to render_template(:index)
      end
    end
  end
end
