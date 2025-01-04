import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminRoute extends Route {
  @service store;
  @service router;
  @service user;

  queryParams = {
    offset: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
    sort: {
      refreshModel: true,
    },
    filter: {
      refreshModel: true,
    },
  };

  async model(params) {
    let offset = params.offset;
    if (!offset) {
      offset = 0;
    }
    let limit = params.limit;
    if (!limit) {
      limit = limit;
    }
    let sort = params.sort;
    let filter = params.filter;

    var model = this.store
      .query('contact', {
        page: { offset: offset, limit: limit },
        sort: sort,
        filter: filter,
      })
      .then((result) => {
        let meta = result.meta;
        this.controllerFor('admin').totalRecords = meta.total;
        return result;
      });

    return model;
  }

  async beforeModel(transition) {
    this.user.validateLogin().catch(
      function (e) {
        this.router.transitionTo('login');
      }.bind(this),
    );
  }
}
