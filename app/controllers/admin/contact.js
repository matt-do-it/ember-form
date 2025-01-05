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
        mobile: true,
      },
      {
        name: `Email`,
        valuePath: `email`,
        mobile: false,
      },
      {
        name: `Message`,
        valuePath: `message`,
        mobile: false,
      },
      {
        name: `Created at`,
        valuePath: `createdAt`,
        mobile: false,
      },
    ];
  }
}
