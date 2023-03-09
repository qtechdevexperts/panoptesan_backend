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

    start_time: {
        type: DataTypes.DATE,
        allowNull: true
    },

    end_time: {
        type: DataTypes.DATE,
        allowNull: true
    }
};

class Fleet extends Model {
    static initialize(sequelize) {
        Fleet.init(model, {
            sequelize,
            modelName: table_names.fleet,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.fleet
        })
    }
}

export default Fleet;