import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminEditActions extends Component {
  @service router;

  @action delete() {
    let modelName = this.args.model.constructor.modelName;

    this.args.model.destroyRecord().then(
      function (e) {
        this.router.transitionTo('admin.' + modelName + '.index');
      }.bind(this),
    );
  }

  @action cancel() {
    let modelName = this.args.model.constructor.modelName;
    this.router.transitionTo('admin.' + modelName + '.index');
  }

  @action save() {
    let modelName = this.args.model.constructor.modelName;
    if (this.args.model.validations.isValid) {
      this.args.model.save().then(
        function (e) {
          this.router.transitionTo('admin.' + modelName + '.index');
        }.bind(this),
      );
    }
  }
}
