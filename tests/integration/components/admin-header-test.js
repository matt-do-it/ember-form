import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-form/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | admin-header', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<AdminHeader />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <AdminHeader>
        template block text
      </AdminHeader>
    `);

    assert.dom().hasText('template block text');
  });
});
