import { Router } from "express";
import SuperAdminController from "../../controllers/super-admin-controller.js";

const router = new Router();
const controller = new SuperAdminController();

router.get('/login', controller.authenticate);
router.get('/register', controller.register);

export default router;