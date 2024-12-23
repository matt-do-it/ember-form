import Service from '@ember/service';
import fetch from 'fetch';
import ENV from 'ember-form/config/environment';

export default class BackendService extends Service {
  submit(model) {
    var hash = model.getProperties('name', 'email', 'message');

    return fetch(ENV.APP.API_URL + 'api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hash),
    });
  }
}
