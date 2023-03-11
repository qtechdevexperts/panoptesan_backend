import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    username: {
        type: DataTypes.STRING,
        allowNull: true
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },

    address: {
        type: DataTypes.STRING,
        allowNull: true
    },

    national_id_number: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    city_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    driving_license_number: {
        type: DataTypes.STRING,
        allowNull: true
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class User extends Model {
    static initialize(sequelize) {
        User.init(model, {
            sequelize,
            modelName: table_names.user,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.user
        })
    }
}

export default User;