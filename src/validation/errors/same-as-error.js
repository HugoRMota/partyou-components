import { ErrorProtocol } from './error-protocol'

export class SameAsError extends ErrorProtocol {
    constructor(fieldName, message) {
        const args = message ? [message] : ['sameAs', { fieldName }]
        super(...args)
        this.name = 'SameAsError'
    }
}