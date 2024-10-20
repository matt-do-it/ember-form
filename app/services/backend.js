import Service from '@ember/service';
import fetch from 'fetch';

export default class BackendService extends Service {
  submit(model) {
    var hash = model.getProperties('name', 'email', 'message');

    return fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hash),
    });

  }
}
