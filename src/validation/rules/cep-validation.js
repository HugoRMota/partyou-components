import { InvalidCepError } from './../errors'

export class CepValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }

    validate(input) {
        const cepRegex = /[0-9]{2}[\.]?[0-9]{3}[-]?[0-9]{3}/
        return cepRegex.test(input[this._fieldName]) ? null : new InvalidCepError()
    }
}