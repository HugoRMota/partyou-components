import { ErrorProtocol } from './error-protocol'

export class OnlyNumbersError extends ErrorProtocol {
    constructor(message) {
        message = message || 'onlyNumbers'
        super(message)
        this.name = 'OnlyNumbersError'
    }
}