import messages from './messages'

export const usePyI18n = () => {
	const storageLang = localStorage.getItem('@partyou/i18n') || 'ptBr'
	const currentMessages = messages[storageLang] || messages['ptBr']

	const te = (path) => {
		return !!currentMessages[path]
	}

	const t = (path, options) => {
		return te(path) ? currentMessages[path](options) : path
	}

	return { t, te }
}
