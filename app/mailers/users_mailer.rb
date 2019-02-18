# frozen_string_literal: true

class UsersMailer < ApplicationMailer
  def welcome(user:)
    @user = user
    @client_root_url = client_root_url

    I18n.with_locale(I18n.locale) do
      mail(to: @user.email, subject: I18n.t('users_mailer.welcome.subject'))
    end
  end

  private

  def client_root_url
    Rails.env.production? ? 'https://govinu.com' : 'http://localhost:3000'
  end
end
