export default {
    invalidField: () => 'Campo inválido',
    required: () => 'Campo obrigatório',
    invalidCpf: () => 'CPF inválido',
    minLength: ({ num }) => `Mínimo de ${num} caracteres`,
    invalidCep: () => 'CEP inválido',
    length: ({ num }) => `Campo deve ter ${num} caracteres`,
    maxLength: ({ num }) => `Máximo de ${num} caracteres`,
    minWords: ({ num }) => `Mínimo de ${num} palavras`,
    onlyNumbers: () => 'Campo deve conter apenas números',
    invalidDate: () => 'Data inválida',
    sameAs: ({ fieldName }) => `Campo deve ser igual ao campo ${fieldName}`
}