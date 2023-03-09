import { Router } from "express";
import FleetManagerController from "../../controllers/fleet-manager-controller.js";

const router = new Router();
const controller = new FleetManagerController();

router.get('/login', controller.authenticate);
router.get('/register', controller.register);

export default router;