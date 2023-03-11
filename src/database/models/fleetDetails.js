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

        Fleet.hasOne(FleetDetails, {
            foreignKey: 'fleet_id'
        });
        FleetDetails.belongsTo(Fleet);

        Vehicle.hasOne(FleetDetails, {
            foreignKey: 'vehicle_id'
        });
        FleetDetails.belongsTo(Vehicle);

        User.hasMany(FleetDetails, {
            foreignKey: 'driver_id'
        });
        FleetDetails.belongsTo(User);

        FleetManagementDetails.hasOne(FleetDetails, {
            foreignKey: 'fleet_management_details_id'
        });
        FleetDetails.belongsTo(FleetManagementDetails);
    }
}

export default FleetDetails;