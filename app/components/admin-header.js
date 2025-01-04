import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AdminHeader extends Component {
  @service user;
  @service router;

  @action
  logout() {
    this.user.logout().then(
      function (e) {
        this.router.transitionTo('login');
      }.bind(this),
    );
  }

  get isLoggedIn() {
    return this.user.isLoggedIn;
  }

  get profile() {
    var shortName = this.user.name
      .split(' ')
      .map((n) => n[0])
      .join('.');
    return {
      user: this.user.user,
      name: this.user.name,
      shortName: shortName,
    };
  }
}
