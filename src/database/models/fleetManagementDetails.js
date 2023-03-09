import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import FleetService from "./fleetService.js";
import FleetStation from "./fleetStation.js";
import User from "./user.js";

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    fleet_service_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fleet_station_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    fleet_manager_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
};

class FleetManagementDetails extends Model {
    static initialize(sequelize) {
        FleetManagementDetails.init(model, {
            sequelize,
            modelName: table_names.fleetManagementDetails,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.fleetManagementDetails
        });

        FleetManagementDetails.hasOne(FleetService, {
            foreignKey: 'fleet_service_id'
        });
        FleetService.belongsTo(FleetManagementDetails);

        FleetManagementDetails.hasOne(FleetStation, {
            foreignKey: 'fleet_station_id'
        });
        FleetStation.belongsTo(FleetManagementDetails);

        FleetManagementDetails.hasOne(User, {
            foreignKey: 'fleet_manager_id'
        });
        User.belongsTo(FleetManagementDetails);
    }
}

export default FleetManagementDetails;