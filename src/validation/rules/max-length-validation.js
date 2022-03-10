import { MaxLengthError } from './../errors'

export class MaxLengthValidation {
    constructor(fieldName, length) {
        this._fieldName = fieldName
        this._length = length
    }

    validate(input) {
        return input[this._fieldName].length > this._length ? new MaxLengthError(this._length) : null
    }
}