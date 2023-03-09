import messages from "../constants/messages.js";
import statusCodes from "../constants/status-codes.js";
import { Exception } from "../helpers/exception.js";

class BaseController {

    constructor() {
        this.Messages = messages;
        this.StatusCodes = statusCodes;
    }

    createException(code, message, innerError = null) {
        return new Exception(code, message, innerError);
    }

    handleException(ex) {
        
    }
}

export default BaseController;