import { module, test } from 'qunit';
import { setupTest } from 'ember-form/tests/helpers';

module('Unit | Route | submit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:submit');
    assert.ok(route);
  });
});
