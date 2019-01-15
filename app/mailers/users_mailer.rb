# frozen_string_literal: true

class UsersMailer < ApplicationMailer
  def welcome(user:)
    @user = user

    I18n.with_locale(I18n.locale) do
      mail(to: @user.email, subject: I18n.t('users_mailer.welcome.subject'))
    end
  end
end
