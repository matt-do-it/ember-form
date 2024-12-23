import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminIndexRoute extends Route {
  @service store;

  model() {
    var model = this.store.findAll('contact');

    return model;
  }
}
