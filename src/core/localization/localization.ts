import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';


import translationEnglish from './english/english.json';
import translationArabic from './arabic/arabic.json';

const resources = {
    en:{
        translation:translationEnglish
    },
    ar:{
        translation:translationArabic
    }
}

i18next.use(initReactI18next).init({
    resources,
    lng:"en" //defaault language
})

export default i18next;