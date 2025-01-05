import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminBaseEditController extends Controller {
  @service router;

  get parent() {
    let applicationInstance = getOwner(this);
    return applicationInstance.lookup(`controller:admin.${this.modelName}`);
  }


  get modelAttributes() {
    var a = [];
    this.model.eachAttribute(function (attribute, meta) {
      a.push(meta);
    });
    return a;
  }
}
