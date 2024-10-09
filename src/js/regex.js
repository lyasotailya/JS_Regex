export default class Validator {
    constructor(username) {
        this.username = username
    }

    validateUsername() {
        let validName = /^[a-z][\w-]*[a-z]$/
        let validDigit = /\d{4,}/
        return validName.test(this.username) && !validDigit.test(this.username)
    }
}
