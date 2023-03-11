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

        FleetService.hasOne(FleetManagementDetails, {
            foreignKey: 'fleet_service_id'
        });
        FleetManagementDetails.belongsTo(FleetService);

        FleetStation.hasOne(FleetManagementDetails, {
            foreignKey: 'fleet_station_id'
        });
        FleetManagementDetails.belongsTo(FleetStation);

        User.hasOne(FleetManagementDetails, {
            foreignKey: 'fleet_manager_id'
        });
        FleetManagementDetails.belongsTo(User);
    }
}

export default FleetManagementDetails;