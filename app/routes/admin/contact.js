import Route from '@ember/routing/route';
import { service } from '@ember/service';
import AdminBaseRoute from 'ember-form/routes/admin/base';

export default class AdminContactRoute extends AdminBaseRoute {
  modelName = 'contact';
}
