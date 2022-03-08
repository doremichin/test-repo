import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

i18n
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        fallbackLng: 'en',
        debug: true,
        // { t } =  useTranslation();
        // resources en translation 부분에 키값을
        // t(키값) 이렇게 넣어서 사용
        // t("Welcome to React") => "Welcome to React and react-i18next"
        resources: {
            en: {
                translation: {
                    "Welcome to React": "Welcome to React and react-i18next",
                    "나도 보쌈 먹고싶다아" : "아니야 양꼬치가 더 나을 거 같아"
                }
            },
            jp : {
                translation : {
                    "Welcome to React": "혼모노 환영데스네",
                    "나도 보쌈 먹고싶다아" : "양꼬치 스키요"
                }
            }
        },
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        }
    });


export default i18n;