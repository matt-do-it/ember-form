import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class SubmitController extends Controller {
  @service user;
  @service router;
  @tracked isSubmitError = false;

  @action
  submit() {
    this.user
      .login(this.model)
      .then(
        function (e) {
          this.router.transitionTo('admin');
        }.bind(this),
      )
      .catch(
        function (e) {
          console.log(e);
          this.isSubmitError = true;
        }.bind(this),
      );
  }
}
