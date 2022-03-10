import { MinWordsError } from './../errors'

export class MinWordsValidation {
    constructor(fieldName, length) {
        this._fieldName = fieldName
        this._length = length
    }

    validate(input) {
        const val = input[this._fieldName]
        return val.split(' ').length < this._length ? new MinWordsError(this._length) : null
    }
}