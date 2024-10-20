import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class SubmitRoute extends Route {
  @service store;
  @service router;

  model() {
    var model = this.store.peekRecord('contact', 'global');

    if (!model) {
      this.router.transitionTo('index');
    }
    return model;
  }

  beforeModel() {
    this.router.on('routeDidChange', () => window.scrollTo(0, 0));
  }
}
