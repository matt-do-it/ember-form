import EmberRouter from '@ember/routing/router';
import config from 'ember-form/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('login');
  this.route('submit');
  this.route('admin', { path: '/admin' }, function (routes) {
    this.route('contact', { path: '/contact' }, function (routes) {
      this.route('index', { path: '/list' });
      this.route('edit', { path: '/edit/:id' });
    });
  });
});
