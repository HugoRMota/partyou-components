import { LengthError } from './../errors'

export class LengthValidation {
    constructor(fieldName, length) {
        this._fieldName = fieldName
        this._length = length
    }

    validate(input) {
        return input[this._fieldName].length !== this._length ? new LengthError(this._length) : null
    }
}