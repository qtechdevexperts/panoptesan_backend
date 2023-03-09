import UserController from "./user-controller.js";
import userRoles from "../constants/user-roles.js";

class DriverController extends UserController {
    constructor() {
        super(userRoles.DRIVER);
    }
}

export default DriverController;