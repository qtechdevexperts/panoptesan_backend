export class Exception extends Error {
    constructor(code, message, innerError = null) {
        super(message);
        this.code = code;
        this.innerError = innerError;
    }
};