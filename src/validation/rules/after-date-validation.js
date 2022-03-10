import { isAfter } from 'date-fns'

import { InvalidDateError } from './../errors'
import { DateValidation } from './date-validation'

export class AfterDateValidation {
    constructor(fieldName, fieldNameToCompare) {
        this._fieldName = fieldName
        this._fieldNameToCompare = fieldNameToCompare
    }

    // Date format => [YYYY, MM, DD]
    validate(input) {
        const dateValidation = new DateValidation(this._fieldName)
        const dateIsValid = dateValidation.validate({
            [this._fieldName]: input[this._fieldName]
        })

        if (dateIsValid) {
            return dateIsValid
        }

        const date = new Date(...input[this._fieldName])
        const dateToCompare = new Date(...input[this._fieldNameToCompare])

        return isAfter(date, dateToCompare) ? null : new InvalidDateError()
    }
}