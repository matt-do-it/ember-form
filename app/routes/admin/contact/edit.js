import Route from '@ember/routing/route';
import { service } from '@ember/service';
import AdminBaseEditRoute from 'ember-form/routes/admin/base/edit';

export default class AdminIndexRoute extends AdminBaseEditRoute {
  modelName = 'contact';
}
