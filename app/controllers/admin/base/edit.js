import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminBaseEditController extends Controller {
  @service router;

  get parent() {
    let applicationInstance = getOwner(this);
    return applicationInstance.lookup(`controller:admin.${this.modelName}`);
  }

  @action delete() {
    this.model.destroyRecord().then(
      function (e) {
        this.router.transitionTo('admin.' + this.modelName + '.index');
      }.bind(this),
    );
  }

  @action cancel() {
    this.router.transitionTo('admin.' + this.modelName + '.index');
  }

  @action save() {
    if (this.model.validations.isValid) {
      this.model.save().then(
        function (e) {
          this.router.transitionTo('admin.' + this.modelName + '.index');
        }.bind(this),
      );
    }
  }

  get modelAttributes() {
    var a = [];
    this.model.eachAttribute(function (attribute, meta) {
      a.push(meta);
    });
    return a;
  }
}
