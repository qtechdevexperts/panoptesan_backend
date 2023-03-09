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

    iso: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

class Country extends Model {
    static initialize(sequelize) {
        Country.init(model, {
            sequelize,
            modelName: table_names.country,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.country
        });
    }
}

export default Country;