import UserController from "./user-controller.js";
import userRoles from "../constants/user-roles.js";

class FleetManagerController extends UserController {
    constructor() {
        super(userRoles.FLEET_MANAGER);
    }
}

export default FleetManagerController;