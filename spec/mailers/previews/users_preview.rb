# frozen_string_literal: true

class UsersPreview < ActionMailer::Preview
  def welcome
    UsersMailer.welcome(user: user)
  end

  def reset_password_instructions
    Devise::Mailer.reset_password_instructions(user, 'faketoken', {})
  end

  def password_change
    Devise::Mailer.password_change(user)
  end

  private

  def user
    @user ||= User.new(
      email:      'jens_hansen@example.com',
      first_name: 'Jens',
      last_name:  'Hansen'
    )
  end
end
