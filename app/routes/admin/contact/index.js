import Route from '@ember/routing/route';
import { service } from '@ember/service';
import AdminBaseIndexRoute from 'ember-form/routes/admin/base/index';

export default class AdminIndexRoute extends AdminBaseIndexRoute {
  modelName = 'contact';
}
