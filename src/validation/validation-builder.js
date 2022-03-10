import {
    EmailValidation,
    RequiredFieldValidation,
    CpfValidation,
    MinLengthValidation,
    CepValidation,
    LengthValidation,
    MaxLengthValidation,
    OnlyNumbersValidation,
    DateValidation,
    AfterDateValidation,
    BeforeDateValidation,
    MinWordsValidation,
    SameAsValidation
} from './rules'

export class ValidationBuilder {
    constructor(fieldName, validations) {
        this._fieldName = fieldName
        this._validations = validations
    }

    static field(fieldName) {
        return new ValidationBuilder(fieldName, [])
    }

    required() {
        this._validations.push(new RequiredFieldValidation(this._fieldName))
        return this
    }

    email() {
        this._validations.push(new EmailValidation(this._fieldName))
        return this
    }

    cpf() {
        this._validations.push(new CpfValidation(this._fieldName))
        return this
    }

    cep() {
        this._validations.push(new CepValidation(this._fieldName))
        return this
    }

    minLength(length) {
        this._validations.push(new MinLengthValidation(this._fieldName, length))
        return this
    }

    length(length) {
        this._validations.push(new LengthValidation(this._fieldName, length))
        return this
    }

    maxLength(length) {
        this._validations.push(new MaxLengthValidation(this._fieldName, length))
        return this
    }

    onlyNumbers() {
        this._validations.push(new OnlyNumbersValidation(this._fieldName))
        return this
    }

    isDate() {
        this._validations.push(new DateValidation(this._fieldName))
        return this
    }

    afterDate(dateToCompare) {
        this._validations.push(new AfterDateValidation(this._fieldName, dateToCompare))
        return this
    }

    beforeDate(dateToCompare) {
        this._validations.push(new BeforeDateValidation(this._fieldName, dateToCompare))
        return this
    }

    minWords(minLenght) {
        this._validations.push(new MinWordsValidation(this._fieldName, minLenght))
        return this
    }

    same(otherField) {
        this._validations.push(new SameAsValidation(this._fieldName, otherField))
        return this
    }

    build() {
        return this._validations
    }
}