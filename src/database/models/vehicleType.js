import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";

const model = {
    slug: {
        type: DataTypes.STRING,
        primaryKey: true
    },

    capacity: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },

    weight: {
        type: DataTypes.DOUBLE,
        allowNull: true
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class VehicleType extends Model {
    static initialize(sequelize) {
        VehicleType.init(model, {
            sequelize,
            modelName: table_names.vehicleType,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.vehicleType
        })
    }
}

export default VehicleType;