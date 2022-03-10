import { ErrorProtocol } from './error-protocol'

export class InvalidCpfError extends ErrorProtocol {
    constructor(message) {
        message = message || 'invalidCpf'
        super(message)
        this.name = 'InvalidCpfError'
    }
}