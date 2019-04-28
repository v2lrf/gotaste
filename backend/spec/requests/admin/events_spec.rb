# frozen_string_literal: true

require 'rails_helper'

describe 'Events Admin Page' do
  let(:admin) { create(:user, :admin) }
  let!(:host) { create(:business) }

  before do
    sign_in(admin)
  end

  describe 'POST create' do
    let(:create_params) do
      {
        event: attributes_for(:event, host_id: host.id)
      }
    end

    it 'creates event' do
      expect do
        post admin_events_path, params: create_params
      end.to change { Event.count }.by(1)
    end

    context 'when `same_address_as_host` is chosen' do
      let(:create_params) do
        {
          event: attributes_for(
            :event,
            host_id:              host.id,
            same_address_as_host: '1'
          )
        }
      end

      it 'copies the address from the business to the event' do
        post admin_events_path, params: create_params

        expect(Event.last.address).to have_attributes(
          street_name:   host.address.street_name,
          street_number: host.address.street_number,
          postal_code:   host.address.postal_code,
          city:          host.address.city
        )
      end
    end
  end

  describe 'PUT update' do
    let(:event) { create :event }

    let(:update_params) do
      {
        event: {
          name: 'The best wine event'
        }
      }
    end

    it 'updates the event' do
      put admin_event_path(event), params: update_params

      expect(Event.find(event.id)).to have_attributes(
        name: 'The best wine event'
      )
    end
  end
end
