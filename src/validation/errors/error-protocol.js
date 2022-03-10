import { useI18n } from './../i18n'

export class ErrorProtocol extends Error {
    constructor(path, config = {}) {
        const { te, t } = useI18n()
        const message = te(path) ? t(path, config) : path
        super(message)
    }
}