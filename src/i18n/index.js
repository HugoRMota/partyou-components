import { createI18n } from 'vue-i18n'

import messages from './messages'

const lang = localStorage.getItem('@partyou/i18n')

const i18n = createI18n({
    locale: lang || 'ptBr',
    fallbackLocale: 'ptBr',
    globalInjection: true,
    legacy: false,
    messages
})

export const getLangs = (t) => ([
    { label: t('lang.ptBr'), value: 'ptBr' },
    { label: t('lang.en'), value: 'en' }
])

export default i18n