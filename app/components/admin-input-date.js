import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminInputDate extends Component {
  @service router;

  get formattedValue() {
    return 'hdf';
  }
}
