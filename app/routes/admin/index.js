import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class AdminIndexRoute extends Route {
  @service store;

  queryParams = {
    offset: {
      refreshModel: true,
    },
    limit: {
      refreshModel: true,
    },
  };

  model(params) {
    let offset = params.offset;
    if (!offset) {
      offset = 0;
    }
    let limit = params.limit;
    if (!limit) {
      limit = limit;
    }
    var model = this.store
      .query('contact', { page: { offset: offset, limit: limit } })
      .then((result) => {
        let meta = result.meta;
        this.controllerFor('admin/index').totalRecords = meta.total;
        return result;
      });

    return model;
  }
}
