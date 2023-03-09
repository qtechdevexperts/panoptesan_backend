import UserService from "../services/user-service.js";
import BaseController from "./base-controller.js";

class UserController extends BaseController {
    constructor(userRole) {
        super();
        this.UserService = new UserService(userRole);
    }

    authenticate = async (req, res, next) => {
        try {
            let { username, password } = req;
            let result = await this.UserService.authenticate(username, password);

            return res.success(
                this.StatusCodes.SUCCESS, 
                this.Messages.SUCCESS, 
                result
            );
        } catch (ex) {
            return res.error(
                new Exception(
                    this.StatusCodes.SERVER_ERROR, 
                    this.Messages.FAILURE, 
                    ex
                )
            );
        }
    }

    register = async (req, res, next) => {
        try {
            let { username, password } = req;
            let result = await this.UserService.register(username, password);

            return res.success(
                this.StatusCodes.SUCCESS, 
                this.Messages.SUCCESS, 
                result
            );
        } catch (ex) {
            return res.error(
                new Exception(
                    this.StatusCodes.SERVER_ERROR, 
                    this.Messages.FAILURE, 
                    ex
                )
            );
        }
    }
}

export default UserController;