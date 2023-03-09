import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    geo_coordinates: {
        type: DataTypes.STRING,
        allowNull: false
    },

    contact_number: {
        type: DataTypes.STRING,
        allowNull: false
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class FleetStation extends Model {
    static initialize(sequelize) {
        FleetStation.init(model, {
            sequelize,
            modelName: table_names.fleetStation,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.fleetStation
        })
    }
}

export default FleetStation;