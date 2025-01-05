import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminRoute extends Route {
  @service router;

  beforeModel(/* transition */) {
  //  this.router.transitionTo('admin.contact.index'); // Implicitly aborts the on-going transition.
  }
}
