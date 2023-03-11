import { Router } from "express";
import SuperAdminController from "../../controllers/super-admin-controller.js";

const router = new Router();
const controller = new SuperAdminController();

router.post('/login', controller.authenticate);
router.post('/register', controller.register);

export default router;