import { RequiredFieldError } from './../errors'

export class RequiredFieldValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }

    validate(input) {
        return input[this._fieldName] ? null : new RequiredFieldError()
    }
}