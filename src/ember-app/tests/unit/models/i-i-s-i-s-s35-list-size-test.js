import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-i-s-s35-list-size', 'Unit | Model | i-i-s-i-s-s35-list-size', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-i-s-s35-form',
    'model:i-i-s-i-s-s35-investment',
    'model:i-i-s-i-s-s35-list-industry',
    'model:i-i-s-i-s-s35-list-inv',
    'model:i-i-s-i-s-s35-list-size',
    'model:i-i-s-i-s-s35-size',
    'model:i-i-s-i-s-s35-sub-industry',
    'model:i-i-s-i-s-s35-support',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
