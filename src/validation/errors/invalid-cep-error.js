import { ErrorProtocol } from './error-protocol'

export class InvalidCepError extends ErrorProtocol {
    constructor(message) {
        message = message || 'invalidCep'
        super(message)
        this.name = 'InvalidCepError'
    }
}