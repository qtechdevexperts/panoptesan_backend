import { Router } from "express";
import response from "../middlewares/response.js";
import superAdminRoutes from "./superadmin/routes.js";
import fleetManagerRoutes from "./fleetmanager/routes.js";
import driverRoutes from "./driver/routes.js";

const router = new Router();

router.use('/superadmin', response, superAdminRoutes);
router.use('/fleetmanager', response, fleetManagerRoutes);
router.use('/driver', response, driverRoutes);

export default router;