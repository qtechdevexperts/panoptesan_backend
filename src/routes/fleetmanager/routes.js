import { Router } from "express";
import FleetManagerController from "../../controllers/fleet-manager-controller.js";

const router = new Router();
const controller = new FleetManagerController();

router.post('/login', controller.authenticate);
router.post('/register', controller.register);

export default router;