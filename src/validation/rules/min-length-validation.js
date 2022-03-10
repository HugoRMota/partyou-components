import { MinLengthError } from './../errors'

export class MinLengthValidation {
    constructor(fieldName, length) {
        this._fieldName = fieldName
        this._length = length
    }

    validate(input) {
        return input[this._fieldName].length < this._length ? new MinLengthError(this._length) : null
    }
}