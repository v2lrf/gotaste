# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'support@gotaste.dk'
  layout 'mailer'
end
