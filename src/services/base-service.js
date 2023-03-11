import messages from "../constants/messages.js";
import statusCodes from "../constants/status-codes.js";
import { Exception } from "../helpers/exception.js";

class BaseService {
    throwEx(ex) {
        let message = ex.message;
        if (ex.errors && ex.errors.length > 0) {
            message = ex.errors[0].message;
        }

        throw ex.code ? ex : new Exception(statusCodes.SERVER_ERROR, message);
    }
}

export default BaseService;