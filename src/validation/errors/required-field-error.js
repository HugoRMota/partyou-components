import { ErrorProtocol } from './error-protocol'

export class RequiredFieldError extends ErrorProtocol {
    constructor(message) {
        message = message || 'required'
        super(message)
        this.name = 'RequiredField'
    }
}