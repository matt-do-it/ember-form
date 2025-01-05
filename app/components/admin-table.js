import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminTable extends Component {
  @service router;

  get sortDesc() {
    if (this.args.sort[0] == '-') {
      return true;
    } else {
      return false;
    }
  }

  get sortValuePath() {
    if (this.args.sort[0] == '-') {
      return this.args.sort.substring(1);
    } else {
      return this.args.sort;
    }
  }
}
