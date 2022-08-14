import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISISS35FormLForm from './forms/i-i-s-i-s-s35-form-l';
import IISISS35InvestmentLForm from './forms/i-i-s-i-s-s35-investment-l';
import IISISS35SizeLForm from './forms/i-i-s-i-s-s35-size-l';
import IISISS35SubIndustryLForm from './forms/i-i-s-i-s-s35-sub-industry-l';
import IISISS35SupportLForm from './forms/i-i-s-i-s-s35-support-l';
import IISISS35FormEForm from './forms/i-i-s-i-s-s35-form-e';
import IISISS35InvestmentEForm from './forms/i-i-s-i-s-s35-investment-e';
import IISISS35SizeEForm from './forms/i-i-s-i-s-s35-size-e';
import IISISS35SubIndustryEForm from './forms/i-i-s-i-s-s35-sub-industry-e';
import IISISS35SupportEForm from './forms/i-i-s-i-s-s35-support-e';
import IISISS35FormModel from './models/i-i-s-i-s-s35-form';
import IISISS35InvestmentModel from './models/i-i-s-i-s-s35-investment';
import IISISS35ListIndustryModel from './models/i-i-s-i-s-s35-list-industry';
import IISISS35ListInvModel from './models/i-i-s-i-s-s35-list-inv';
import IISISS35ListSizeModel from './models/i-i-s-i-s-s35-list-size';
import IISISS35SizeModel from './models/i-i-s-i-s-s35-size';
import IISISS35SubIndustryModel from './models/i-i-s-i-s-s35-sub-industry';
import IISISS35SupportModel from './models/i-i-s-i-s-s35-support';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-i-s-s35-form': IISISS35FormModel,
    'i-i-s-i-s-s35-investment': IISISS35InvestmentModel,
    'i-i-s-i-s-s35-list-industry': IISISS35ListIndustryModel,
    'i-i-s-i-s-s35-list-inv': IISISS35ListInvModel,
    'i-i-s-i-s-s35-list-size': IISISS35ListSizeModel,
    'i-i-s-i-s-s35-size': IISISS35SizeModel,
    'i-i-s-i-s-s35-sub-industry': IISISS35SubIndustryModel,
    'i-i-s-i-s-s35-support': IISISS35SupportModel
  },

  'application-name': 'I s s35',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'I s s35',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s35',
          title: 'I s s35'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'i-s-s35': {
          caption: 'ISS35',
          title: 'ISS35',
          'i-i-s-i-s-s35-support-l': {
            caption: 'Support',
            title: ''
          },
          'i-i-s-i-s-s35-form-l': {
            caption: 'Form',
            title: ''
          },
          'i-i-s-i-s-s35-investment-l': {
            caption: 'Investment',
            title: ''
          },
          'i-i-s-i-s-s35-sub-industry-l': {
            caption: 'Sub industry',
            title: ''
          },
          'i-i-s-i-s-s35-size-l': {
            caption: 'Size',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-i-s-s35-form-l': IISISS35FormLForm,
    'i-i-s-i-s-s35-investment-l': IISISS35InvestmentLForm,
    'i-i-s-i-s-s35-size-l': IISISS35SizeLForm,
    'i-i-s-i-s-s35-sub-industry-l': IISISS35SubIndustryLForm,
    'i-i-s-i-s-s35-support-l': IISISS35SupportLForm,
    'i-i-s-i-s-s35-form-e': IISISS35FormEForm,
    'i-i-s-i-s-s35-investment-e': IISISS35InvestmentEForm,
    'i-i-s-i-s-s35-size-e': IISISS35SizeEForm,
    'i-i-s-i-s-s35-sub-industry-e': IISISS35SubIndustryEForm,
    'i-i-s-i-s-s35-support-e': IISISS35SupportEForm
  },

});

export default translations;
