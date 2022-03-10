import { InvalidFieldError } from './../errors'

export class EmailValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }

    validate(input) {
        const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        return (!input[this._fieldName] || emailRegex.test(input[this._fieldName])) ? null : new InvalidFieldError()
    }
}