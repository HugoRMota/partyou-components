export class ValidationComposite {
    constructor(validators) {
        this._validators = validators || []
    }

    static build(validators) {
        return new ValidationComposite(validators)
    }

    validate(fieldName, input) {

        if (typeof fieldName === 'string') {
            const validators = this._validators.filter(v => v._fieldName === fieldName)

            for (const validator of validators) {
                const error = validator.validate(input)

                if (error) {
                    return error.message
                }
            }
        } else if (Array.isArray(fieldName)) {
            return fieldName.map((fname) => {
                const validators = this._validators.filter(v => v._fieldName === fname)

                for (const validator of validators) {
                    const error = validator.validate(input)

                    if (error) {
                        return error.message
                    }
                }
                return null
            })
        }
    }
}