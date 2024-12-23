import Service from '@ember/service';
import fetch from 'fetch';
import ENV from 'ember-form/config/environment';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  login(model) {
    var hash = model.getProperties('username', 'password');
    return fetch(ENV.APP.API_URL + 'api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(hash),
    })
      .then((e) => e.json())
      .then(
        function (e) {
          window.localStorage.setItem('token', e.token);
        }.bind(this),
      );
  }
}
