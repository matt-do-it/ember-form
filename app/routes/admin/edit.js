import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminEditRoute extends Route {
  @service store;

  async model(params) {
    var model = this.store.findRecord('contact', params.id);
    return model;
  }
}
