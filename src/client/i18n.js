import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translations from './locales/fr/translations.json';

i18n
  // load translation using http -> see /public/locales (i.e. https://github.com/i18next/react-i18next/tree/master/example/react/public/locales)
  // learn more: https://github.com/i18next/i18next-http-backend
  // want your translations to be loaded from a professional CDN? => https://github.com/locize/react-tutorial#step-2---use-the-locize-cdn
  .use(initReactI18next)
  .init({
    resources: {
      fr: {
        translations: translations
      }
    },
    fallbackLng: 'fr',
    debug: true,
    lng: 'fr-FR',
    ns: [ 'translations' ],
    defaultNS: 'translations',

    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    backend: {
      // for all available options read the backend's repository readme file
      loadPath: 'https://app.flatchr.io/dist/locales/{{lng}}/{{ns}}.json'
    }
  });


export default i18n;
