import { module, test } from 'qunit';
import { setupTest } from 'ember-form/tests/helpers';

module('Unit | Route | mail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:mail');
    assert.ok(route);
  });
});
