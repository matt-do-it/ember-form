import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminEditActions extends Component {
  @service router;

  get limitList() {
    return [
      {
        limit: 10,
        isActive: this.args.limit == 10,
      },
      {
        limit: 20,
        isActive: this.args.limit == 20,
      },
      {
        limit: 50,
        isActive: this.args.limit == 50,
      },
      {
        limit: 100,
        isActive: this.args.limit == 100,
      },
    ];
  }

  @action updateLimit(event) {
    this.args.updateLimit(event.target.value, event);
  }
}
