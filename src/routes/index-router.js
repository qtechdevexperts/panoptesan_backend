import { Router } from "express";
import bodyParser from 'body-parser';
import response from "../middlewares/response.js";
import superAdminRoutes from "./superadmin/routes.js";
import fleetManagerRoutes from "./fleetmanager/routes.js";
import driverRoutes from "./driver/routes.js";

const router = new Router();

// create application/json parser
var jsonParser = bodyParser.json()
 
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.use('/superadmin', jsonParser, response, superAdminRoutes);
router.use('/fleetmanager', jsonParser, response, fleetManagerRoutes);
router.use('/driver', jsonParser, response, driverRoutes);

export default router;