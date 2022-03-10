import { InvalidCpfError } from './../errors'

// validar formato do cpf
// remover pontos e traços
// validar cpfs inválidos
// validar dígito verificador

export class CpfValidation {
    constructor(fieldName) {
        this._fieldName = fieldName
    }

    _validateCpfFormat(cpf) {
        const regex = /([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/
        return regex.test(cpf)
    }

    _normalizeCpf(cpf) {
        return cpf.replace(/[^0-9 ]/g, '')
    }

    _checkDigit(cpf) {
        let digit
        let sum = cpf.split('').slice(0, 9).reduce((acc, num, index) => {
            acc += parseInt(num) * (10 - index)
            return acc
        }, 0)

        digit = (sum * 10) % 11
        digit = digit > 9 ? 0 : digit

        if (digit !== parseInt(cpf[9])) {
            return false
        }

        sum = cpf.split('').slice(0, 10).reduce((acc, num, index) => {
            acc += parseInt(num) * (11 - index)
            return acc
        }, 0)

        digit = (sum * 10) % 11
        digit = digit > 9 ? 0 : digit

        if (digit !== parseInt(cpf[10])) {
            return false
        }

        return true
    }

    _cpfValidation(value) {
        if (!this._validateCpfFormat(value)) {
            return false
        }

        const strCpf = this._normalizeCpf(value)

        return this._checkDigit(strCpf)
    }

    validate(input) {
        return this._cpfValidation(input[this._fieldName]) ? null : new InvalidCpfError()
    }
}