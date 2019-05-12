# frozen_string_literal: true

require 'rails_helper'

describe 'Welcome page', type: :request do
  before do
    sign_in(user)
  end

  context 'when signed in as an admin' do
    let(:user) { create(:user, :admin) }

    it 'redirects to the admin panel page' do
      get root_path
      expect(response).to redirect_to(admin_root_path)
    end
  end

  context 'when signed in as a employee' do
    let(:employee) { create(:employee) }
    let(:user)     { employee.user }

    it 'redirects to the business panel page' do
      get root_path
      expect(response).to redirect_to(private_room_root_path)
    end
  end

  context 'when signed in as a regular user' do
    let(:user) { create(:user) }

    it 'redirects to the main GoTaste page' do
      get root_path
      expect(response).to redirect_to(AppConfig.main_front_page)
    end
  end
end
