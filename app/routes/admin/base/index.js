import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminBaseIndexRoute extends Route {
  async model(params) {
    return this.modelFor('admin.' + this.modelName);
  }
}
