import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';
import AdminBaseIndexController from 'ember-form/controllers/admin/base/index';

export default class AdminContactIndexController extends AdminBaseIndexController {
  modelName = 'contact';
}
