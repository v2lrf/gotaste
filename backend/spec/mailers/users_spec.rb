# frozen_string_literal: true

require 'rails_helper'

RSpec.describe UsersMailer, type: :mailer do
  describe 'welcome' do
    let(:user) { FactoryBot.build_stubbed :user }
    let(:mail) { described_class.welcome(user: user).deliver_now }

    it 'renders the headers' do
      expect(mail.subject).to eq(I18n.t('users_mailer.welcome.subject'))
      expect(mail.to).to eq([user.email])
    end
  end
end
