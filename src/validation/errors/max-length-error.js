import { ErrorProtocol } from './error-protocol'

export class MaxLengthError extends ErrorProtocol {
    constructor(length, message) {
        const args = message ? [message] : ['maxLength', { num: length }]
        super(...args)
        this.name = 'MaxLengthError'
    }
}