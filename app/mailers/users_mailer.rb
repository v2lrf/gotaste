# frozen_string_literal: true

class UsersMailer < ApplicationMailer
  def welcome(user:)
    @user = user
    mail(to: @user.email, subject: 'Velkommen til Govinu')
  end
end
