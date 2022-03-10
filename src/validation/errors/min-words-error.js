import { ErrorProtocol } from './error-protocol'

export class MinWordsError extends ErrorProtocol {
    constructor(length, message) {
        const args = message ? [message] : ['minWords', { num: length }]
        super(...args)
        this.name = 'MinWordsError'
    }
}