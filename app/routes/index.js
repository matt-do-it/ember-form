import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class IndexRoute extends Route {
  @service store;

  model() {
    var model = this.store.peekRecord('contact', 'global');

    if (model == null) {
      model = this.store.createRecord('contact', {
        id: 'global',
        name: null,
        email: null,
        message: null
      });
    }

    return model;
  }
}
