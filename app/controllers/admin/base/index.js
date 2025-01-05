import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';
import { getOwner } from '@ember/application';

export default class AdminBaseIndexController extends Controller {
  @service store;
  @service router;

  get parent() {
    let applicationInstance = getOwner(this);
    return applicationInstance.lookup(`controller:admin.${this.modelName}`);
  }

  @action createRecord() {
    this.router.transitionTo('admin.' + this.modelName + '.edit', 'new');
  }
}
