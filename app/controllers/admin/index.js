import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminIndexController extends Controller {
  @controller admin;
  @service store;
  @service router;

  @action create() {
    var record = this.store.createRecord('contact');
    this.router.transitionTo('admin.edit', record.id);
  }
}
