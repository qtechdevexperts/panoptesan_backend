import UserService from "../services/user-service.js";
import BaseController from "./base-controller.js";
import { Exception } from "../helpers/exception.js";

class UserController extends BaseController {
    constructor(userRole) {
        super();
        console.log('UserController');
        this.UserService = new UserService(userRole);
    }

    authenticate = async (req, res, next) => {
        try {
            let { email, username, password } = req.body;
            let result = await this.UserService.authenticate(email, username, password);

            return res.success(
                this.StatusCodes.SUCCESS, 
                this.Messages.SUCCESS, 
                result
            );
        } catch (ex) {
            return res.error(ex);
        }
    }

    register = async (req, res, next) => {
        try {
            let result = await this.UserService.register(req.body);

            return res.success(
                this.StatusCodes.SUCCESS, 
                this.Messages.SUCCESS, 
                result
            );
        } catch (ex) {
            return res.error(ex);
        }
    }
}

export default UserController;