import { module, test } from 'qunit';
import { setupRenderingTest } from 'gp-tony/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | something-list', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<SomethingList />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <SomethingList @title="title text" @things={{@model}} />
    `);

    assert.dom(this.element).hasText('title text');
  });
});
