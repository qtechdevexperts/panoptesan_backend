import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import Country from "./country.js";

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

    country_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    dial_code: {
        type: DataTypes.STRING,
        allowNull: false
    },
};

class City extends Model {
    static initialize(sequelize) {
        City.init(model, {
            sequelize,
            modelName: table_names.city,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.city
        });

        Country.hasOne(City, {
            foreignKey: 'country_id'
        });
        City.belongsTo(Country);
    }
}

export default City;