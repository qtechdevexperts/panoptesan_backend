import { Router } from "express";
import DriverController from "../../controllers/driver-controller.js";

const router = new Router();
const controller = new DriverController();

router.get('/login', controller.authenticate);
router.get('/register', controller.register);

export default router;