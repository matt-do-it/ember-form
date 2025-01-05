import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';
import AdminBaseEditController from 'ember-form/controllers/admin/base/edit';

export default class AdminContactEditController extends AdminBaseEditController {
  modelName = 'contact';
}
