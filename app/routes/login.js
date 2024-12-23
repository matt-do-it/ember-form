import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { capitalize } from '@ember/string';

export default class LoginRoute extends Route {
  @service store;
  @service user;

  model() {
    var model = this.store.peekRecord('login', 'global');

    if (model == null) {
      model = this.store.createRecord('login', {
        id: 'global',
        username: null,
        password: null,
      });
    }

    return model;
  }
}
