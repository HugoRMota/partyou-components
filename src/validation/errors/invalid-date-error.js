import { ErrorProtocol } from './error-protocol'

export class InvalidDateError extends ErrorProtocol {
    constructor(message) {
        message = message || 'invalidDateField'
        super(message)
        this.name = 'InvalidDateError'
    }
}