import { Sequelize } from "sequelize";
import config from "../config/config.js";
import City from "./models/city.js";
import Country from "./models/country.js";
import Fleet from "./models/fleet.js";
import FleetDetails from "./models/fleetDetails.js";
import FleetManagementDetails from "./models/fleetManagementDetails.js";
import FleetService from "./models/fleetService.js";
import FleetStation from "./models/fleetStation.js";
import Location from "./models/location.js";
import Role from "./models/role.js";
import Subscription from "./models/subscription.js";
import User from "./models/user.js";
import UserRoleMap from "./models/userRoleMap.js";
import UserSession from "./models/userSession.js";
import UserSubscriptionMap from "./models/userSubscriptionMap.js";
import Vehicle from "./models/vehicle.js";
import VehicleType from "./models/vehicleType.js";
import VideoClip from "./models/videoClip.js";

const db = config.db;

let sequelize;

async function connectAsync() {
    try {
        sequelize = new Sequelize(db.name, db.credentials.user, db.credentials.password, {
            host: db.host,
            dialect: db.dialect
        });

        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
    } catch (error) {
        console.error('Unable to connect to the database:', error.message);
        return false;
    }
}

function initTables() {
    // OG Tables
    ///////////////////////////////////
    Country.initialize(sequelize);
    Fleet.initialize(sequelize);
    FleetService.initialize(sequelize);
    FleetStation.initialize(sequelize);
    Role.initialize(sequelize);
    Subscription.initialize(sequelize);
    User.initialize(sequelize);
    VehicleType.initialize(sequelize);
    ///////////////////////////////////
    
    // Dependent and Mapping Tables
    ///////////////////////////////////
    City.initialize(sequelize);
    Vehicle.initialize(sequelize);
    FleetManagementDetails.initialize(sequelize);
    FleetDetails.initialize(sequelize);
    Location.initialize(sequelize);
    UserRoleMap.initialize(sequelize);
    UserSession.initialize(sequelize);
    UserSubscriptionMap.initialize(sequelize);
    VideoClip.initialize(sequelize);
    ///////////////////////////////////
}

export default {
    connectAsync,
    initTables
}