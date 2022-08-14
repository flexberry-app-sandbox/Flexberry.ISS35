import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  name: DS.attr('string'),
  subIndustry: DS.belongsTo('i-i-s-i-s-s35-sub-industry', { inverse: null, async: false }),
  support: DS.belongsTo('i-i-s-i-s-s35-support', { inverse: 'listIndustry', async: false })
});

export let ValidationRules = {
  name: {
    descriptionKey: 'models.i-i-s-i-s-s35-list-industry.validations.name.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  subIndustry: {
    descriptionKey: 'models.i-i-s-i-s-s35-list-industry.validations.subIndustry.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  support: {
    descriptionKey: 'models.i-i-s-i-s-s35-list-industry.validations.support.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ListIndustryE', 'i-i-s-i-s-s35-list-industry', {
    name: attr('Name', { index: 0 }),
    subIndustry: belongsTo('i-i-s-i-s-s35-sub-industry', 'Sub industry', {
      name: attr('Name', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'name' })
  });
};
