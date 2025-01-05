import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import AdminBaseController from 'ember-form/controllers/admin/base';

export default class AdminContactController extends AdminBaseController {
  modelName = 'contact';

  get columns() {
    return [
      {
        name: `Name`,
        valuePath: `name`,
      },
      {
        name: `Email`,
        valuePath: `email`,
      },
      {
        name: `Message`,
        valuePath: `message`,
      },
      {
        name: `Created at`,
        valuePath: `createdAt`,
      },
    ];
  }
}
