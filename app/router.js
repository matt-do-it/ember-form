import EmberRouter from '@ember/routing/router';
import config from 'ember-form/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('mail');
  this.route('message');
  this.route('submit');
});
