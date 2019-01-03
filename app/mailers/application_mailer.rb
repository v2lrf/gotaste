# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: 'support@govinu.com'
  layout 'mailer'
end
