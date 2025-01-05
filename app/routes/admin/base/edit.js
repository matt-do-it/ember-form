import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminBaseEditRoute extends Route {
  @service store;

  async model(params) {
    var parentParams = this.paramsFor('admin.contact');
    if (params.id != 'new') {
      var model = this.store.findRecord('contact', params.id);
      return model;
    } else {
      var model = this.store.createRecord('contact');
      return model;
    }
  }
}
