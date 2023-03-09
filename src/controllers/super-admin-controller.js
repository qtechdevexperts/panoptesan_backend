import UserController from "./user-controller.js";
import userRoles from "../constants/user-roles.js";

class SuperAdminController extends UserController {
    constructor() {
        super(userRoles.SUPERADMIN);
    }
}

export default SuperAdminController;