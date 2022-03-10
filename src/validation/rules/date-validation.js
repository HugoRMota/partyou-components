import { isValid } from 'date-fns'
import { InvalidDateError } from './../errors'

export class DateValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }
    
    // Date format => [YYYY, MM, DD]
    validate(input) {
        return isValid(new Date(...input[this._fieldName])) ? null : new InvalidDateError()
    }
}