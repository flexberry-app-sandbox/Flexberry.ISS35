import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.i-s-s35.caption'),
          title: i18n.t('forms.application.sitemap.i-s-s35.title'),
          children: [{
            link: 'i-i-s-i-s-s35-support-l',
            caption: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-support-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-support-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-i-s-s35-form-l',
            caption: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-form-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-form-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-i-s-s35-investment-l',
            caption: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-investment-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-investment-l.title'),
            icon: 'tasks',
            children: null
          }, {
            link: 'i-i-s-i-s-s35-sub-industry-l',
            caption: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-sub-industry-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-sub-industry-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-i-s-s35-size-l',
            caption: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-size-l.caption'),
            title: i18n.t('forms.application.sitemap.i-s-s35.i-i-s-i-s-s35-size-l.title'),
            icon: 'building',
            children: null
          }]
        }
      ]
    };
  }),
})