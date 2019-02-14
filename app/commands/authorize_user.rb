# frozen_string_literal: true

class AuthorizeUser
  prepend SimpleCommand

  def initialize(headers = {})
    @headers = headers
  end

  def call
    user
  end

  private

  attr_reader :headers

  def user
    User.find(decoded_auth_token[:user_id]) if decoded_auth_token
  end

  def decoded_auth_token
    JsonWebToken.decode(http_auth_header)
  end

  def http_auth_header
    return if headers['Authorization'].blank?

    headers['Authorization'].split(' ').last
  end
end
