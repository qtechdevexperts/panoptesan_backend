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

    website: {
        type: DataTypes.STRING,
        allowNull: true
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

class FleetService extends Model {
    static initialize(sequelize) {
        FleetService.init(model, {
            sequelize,
            modelName: table_names.fleetService,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.fleetService
        })
    }
}

export default FleetService;