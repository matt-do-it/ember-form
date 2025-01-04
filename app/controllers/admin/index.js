import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class AdminIndexController extends Controller {
  queryParams = ['offset', 'limit'];

  @service user;
  @service router;
  @service backend;

  @tracked totalRecords = null;

  @tracked offset = 0;
  @tracked limit = 10;

  get offsetFormatted() {
    return this.offset + 1;
  }

  get offsetNextFormatted() {
    return Math.min(this.offset + this.limit, this.totalRecords);
  }

  get pageList() {
    let showPages = 2;

    let pageCount = Math.ceil(this.totalRecords / this.limit); // Zero based
    let currentPage = this.offset / this.limit; // Zero based

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
        offset: (currentPage - showPages - 1) * this.limit,
        isActive: false,
      });
    }

    for (var i = Math.max(currentPage - showPages, 1); i < currentPage; i++) {
      pageList.push({
        title: i + 1,
        offset: i * this.limit,
        isActive: false,
      });
    }

    pageList.push({
      title: currentPage + 1,
      offset: this.offset,
      isActive: true,
    });

    for (
      var i = currentPage + 1;
      i < Math.min(currentPage + 1 + showPages, pageCount - 1);
      i++
    ) {
      pageList.push({
        title: i + 1,
        offset: i * this.limit,
        isActive: false,
      });
    }

    if (currentPage + 1 + showPages < pageCount - 1) {
      pageList.push({
        title: '...',
        offset: (currentPage + 1 + showPages) * this.limit,
        isActive: false,
      });
    }

    if (currentPage < pageCount - 1) {
      pageList.push({
        title: pageCount,
        offset: (pageCount - 1) * this.limit,
        isActive: false,
      });
    }

    return pageList;
  }

  @action setLimit(event) {
    this.limit = event.target.value;
    this.offset = 0;
  }

  get limitList() {
    return [
      {
        limit: 10,
        isActive: this.limit == 10,
      },
      {
        limit: 20,
        isActive: this.limit == 20,
      },
      {
        limit: 50,
        isActive: this.limit == 50,
      },
      {
        limit: 100,
        isActive: this.limit == 100,
      }
    ];
  }

    @action
  logout() {
    this.user.logout().then(
      function (e) {
        this.router.transitionTo('login');
      }.bind(this),
    );
  }

  get isLoggedIn() {
    return this.user.isLoggedIn;
  }

  get profile() {
    var shortName = this.user.name.split(" ").map((n)=>n[0]).join(".");
    return {
      user: this.user.user,
      name: this.user.name,
      shortName: shortName
    }
  }

}
