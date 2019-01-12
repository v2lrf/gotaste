# Preview all emails at http://localhost:3000/rails/mailers/users
class UsersPreview < ActionMailer::Preview

  # Preview this email at http://localhost:3000/rails/mailers/users/welcome
  def welcome
    UsersMailer.welcome
  end

end
