import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AdminBaseController extends Controller {
  queryParams = ['offset', 'limit', 'sort', 'filter'];

  @service user;
  @service router;
  @service backend;

  @tracked modelName;
  @tracked totalRecords = null;

  @tracked offset = 0;
  @tracked limit = 1;

  @tracked sort = 'createdAt';
  @tracked filter = '';

  @tracked selection = null;

  @action createRecord() {
    this.router.transitionTo('admin.' + this.modelName + '.edit', 'new');
  }


  @action updateLimit(value, event) {
    this.limit = value;
    this.offset = 0;
  }

  @action updateOffset(value, event) {
    this.offset = value;
  }

  @action updateSort(value, event) {
    if (this.sort[0] == '-' && this.sort.substring(1) == value) {
      this.sort = value;
    } else {
      if (this.sort == value) {
        this.sort = '-' + value;
      } else {
        this.sort = value;
      }
    }
  }

  @action updateSelection(value, event) {
    this.selection = value;
    this.router.transitionTo(
      'admin.' + this.modelName + '.edit',
      this.selection.id,
    );
  }


  get columns() {
    return [];
  }
}
