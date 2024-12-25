import Service from '@ember/service';
import fetch from 'fetch';
import ENV from 'ember-form/config/environment';
import { tracked } from '@glimmer/tracking';

export default class UserService extends Service {
  @tracked isLoggedIn = false;
  @tracked user = null;
  @tracked name = null;

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
          console.log(e);
          this.isLoggedIn = true;
          this.user = e.user;
          this.name = e.name;
        }.bind(this),
      );
  }

  logout() {
    window.localStorage.removeItem('token');
    this.token = null;
    return Promise.resolve('Success');
  }

  async validateLogin() {
    let token = window.localStorage.getItem("token");
    if (token) {
      return fetch(ENV.APP.API_URL + 'api/verify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer " + token
        }
      })
      .then((e) => e.json())
      .then(
        function (e) {
          this.isLoggedIn = true;
          this.user = e.user;
          this.name = e.name;
        }.bind(this),
      );
    } else {
      return Promise.reject("Error");
    }
  }
}
