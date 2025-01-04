import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'ember-form/config/environment';
import { service } from '@ember/service';
import { v4 } from 'uuid';

export default class ApplicationAdapter extends JSONAPIAdapter {
  @service user;

  namespace = 'api/admin';
  host = ENV.APP.API_URL;

  get headers() {
    return {
      Authorization: 'Bearer ' + window.localStorage.getItem('token'),
    };
  }

  generateIdForRecord(store, type, inputProperties) {
    return v4();
  }
}
