import { ErrorProtocol } from './error-protocol'

export class LengthError extends ErrorProtocol {
    constructor(length, message) {
        const args = message ? [message] : ['length', { num: length }]
        super(...args)
        this.name = 'LengthError'
    }
}