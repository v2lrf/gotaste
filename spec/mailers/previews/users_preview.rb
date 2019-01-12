# frozen_string_literal: true

class UsersPreview < ActionMailer::Preview
  def welcome
    UsersMailer.welcome(user: user)
  end

  def user
    @user ||= User.new(
      email:      'jens_hansen@example.com',
      first_name: 'Jens',
      last_name:  'Hansen'
    )
  end
end
