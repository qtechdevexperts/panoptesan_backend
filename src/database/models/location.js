import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import User from "./user.js";

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    geo_coordinates: {
        type: DataTypes.STRING,
        allowNull: true
    },

    time: {
        type: DataTypes.DATE,
        allowNull: false
    }
};

class Location extends Model {
    static initialize(sequelize) {
        Location.init(model, {
            sequelize,
            modelName: table_names.location,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.location
        });

        User.hasOne(Location, {
            foreignKey: 'user_id'
        });
        Location.belongsTo(User);
    }
}

export default Location;