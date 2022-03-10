import { OnlyNumbersError } from './../errors'

export class OnlyNumbersValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }

    validate(input) {
        const regex = /^[0-9]*$/
        return regex.test(input[this._fieldName]) ? null : new OnlyNumbersError()
    }
}