import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminEditController extends Controller {
  @service router;
  @controller admin;

  @action delete() {
    this.model.destroyRecord().then(
      function (e) {
        this.router.transitionTo('admin.index');
      }.bind(this),
    );
  }

  @action cancel() {
    this.router.transitionTo('admin.index');
  }

  @action save() {
    if (this.model.validations.isValid) {
      this.model.save().then(
        function (e) {
          this.router.transitionTo('admin.index');
        }.bind(this),
      );
    }
  }
}
