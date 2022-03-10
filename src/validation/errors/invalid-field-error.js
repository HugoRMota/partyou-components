import { ErrorProtocol } from './error-protocol'

export class InvalidFieldError extends ErrorProtocol {
    constructor(message) {
        message = message || 'invalidField'
        super(message)
        this.name = 'InvalidFieldError'
    }
}