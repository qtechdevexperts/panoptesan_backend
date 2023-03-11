import { Router } from "express";
import DriverController from "../../controllers/driver-controller.js";

const router = new Router();
const controller = new DriverController();

router.post('/login', controller.authenticate);
router.post('/register', controller.register);

export default router;