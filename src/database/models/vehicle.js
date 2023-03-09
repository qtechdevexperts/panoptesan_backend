import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import VehicleType from "./vehicleType.js";

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

    registration_number: {
        type: DataTypes.STRING,
        allowNull: true
    },

    vehicle_type_slug: {
        type: DataTypes.STRING,
        allowNull: false
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class Vehicle extends Model {
    static initialize(sequelize) {
        Vehicle.init(model, {
            sequelize,
            modelName: table_names.vehicle,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.vehicle
        });

        Vehicle.hasOne(VehicleType, {
            foreignKey: 'vehicle_type_slug'
        });
        VehicleType.belongsTo(Vehicle);
    }
}

export default Vehicle;