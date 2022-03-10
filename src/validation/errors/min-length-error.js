import { ErrorProtocol } from './error-protocol'

export class MinLengthError extends ErrorProtocol {
    constructor(length, message) {
        const args = message ? [message] : ['minLength', { num: length }]
        super(...args)
        this.name = 'MinLengthError'
    }
}