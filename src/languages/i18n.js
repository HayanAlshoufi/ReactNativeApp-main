import i18next from 'i18next';
import english from './english.json';
import arabic from './arabic.json';
import french from './french.json';
import {initReactI18next} from 'react-i18next';
import { I18nManager } from "react-native";


const resources= {
  en:english,
  fr: french,
  ar:arabic,

};
i18next.use(initReactI18next).init({
    compatibilityJSON: 'v3',
        resources,

    lng: I18nManager.isRTL ? 'ar' : 'en',

  

  interpolation: {
    escapeValue: false
},


});
export default i18next;
