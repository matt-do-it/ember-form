import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { inject as controller } from '@ember/controller';

export default class AdminEditActions extends Component {
  @service router;

  get offsetFormatted() {
    return this.args.offset + 1;
  }

  get offsetNextFormatted() {
    return Math.min(this.args.offset + this.args.limit, this.args.totalRecords);
  }

  get pageList() {
    let showPages = 2;

    let pageCount = Math.ceil(this.args.totalRecords / this.args.limit); // Zero based
    let currentPage = this.args.offset / this.args.limit; // Zero based

    let pageList = [];

    if (currentPage > 0) {
      pageList.push({
        title: 1,
        offset: 0,
        isActive: false,
      });
    }

    if (currentPage - showPages - 1 > 0) {
      pageList.push({
        title: '...',
        offset: (currentPage - showPages - 1) * this.args.limit,
        isActive: false,
      });
    }

    for (var i = Math.max(currentPage - showPages, 1); i < currentPage; i++) {
      pageList.push({
        title: i + 1,
        offset: i * this.args.limit,
        isActive: false,
      });
    }

    pageList.push({
      title: currentPage + 1,
      offset: this.args.offset,
      isActive: true,
    });

    for (
      var i = currentPage + 1;
      i < Math.min(currentPage + 1 + showPages, pageCount - 1);
      i++
    ) {
      pageList.push({
        title: i + 1,
        offset: i * this.args.limit,
        isActive: false,
      });
    }

    if (currentPage + 1 + showPages < pageCount - 1) {
      pageList.push({
        title: '...',
        offset: (currentPage + 1 + showPages) * this.args.limit,
        isActive: false,
      });
    }

    if (currentPage < pageCount - 1) {
      pageList.push({
        title: pageCount,
        offset: (pageCount - 1) * this.args.limit,
        isActive: false,
      });
    }

    return pageList;
  }

  @action updateOffset(value) {
    this.args.updateOffset(value);
  }

}
