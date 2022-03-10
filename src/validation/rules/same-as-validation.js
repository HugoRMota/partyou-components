import { SameAsError } from './../errors'

export class SameAsValidation {
    constructor(fieldName, fieldCompare) {
        this._fieldName = fieldName
        this._fieldCompare = fieldCompare
    }

    validate(input) {
        const val = input[this._fieldName]
        const otherField = input[this._fieldCompare]
        return val === otherField ? null : new SameAsError(this._fieldCompare)
    }
}