import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service user;
  @service router;
  @tracked isSubmitError = false;

  @action
  logout() {
    this.user.logout().then(
      function (e) {
        this.router.transitionTo('login');
      }.bind(this),
    );
  }

  get isLoggedIn() {
    return this.user.isLoggedIn();
  }
}
