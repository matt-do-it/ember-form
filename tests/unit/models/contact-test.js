import { setupTest } from 'ember-form/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Model | contact', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    const store = this.owner.lookup('service:store');
    const model = store.createRecord('contact', {});
    assert.ok(model, 'model exists');
  });
});
