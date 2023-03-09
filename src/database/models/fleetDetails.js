import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import Vehicle from "./vehicle.js";
import User from "./user.js";
import Fleet from "./fleet.js";
import FleetManagementDetails from "./fleetManagementDetails.js";

const model = {
    fleet_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    vehicle_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fleet_management_details_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
};

class FleetDetails extends Model {
    static initialize(sequelize) {
        FleetDetails.init(model, {
            sequelize,
            modelName: table_names.fleetDetails,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.fleetDetails
        });

        FleetDetails.hasOne(Fleet, {
            foreignKey: 'fleet_id'
        });
        Fleet.belongsTo(FleetDetails);

        FleetDetails.hasOne(Vehicle, {
            foreignKey: 'vehicle_id'
        });
        Vehicle.belongsTo(FleetDetails);

        FleetDetails.hasOne(User, {
            foreignKey: 'driver_id'
        });
        User.belongsTo(FleetDetails);

        FleetDetails.hasOne(FleetManagementDetails, {
            foreignKey: 'fleet_management_details_id'
        });
        FleetManagementDetails.belongsTo(FleetDetails);
    }
}

export default FleetDetails;