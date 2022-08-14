import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'I s s35',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'I s s35',
          title: 'I s s35'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
