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

    slug: {
        type: DataTypes.STRING,
        allowNull: false
    },

    parent_id: {
        type: DataTypes.INTEGER,
        allowNull: true
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class Role extends Model {
    static initialize(sequelize) {
        Role.init(model, {
            sequelize,
            modelName: table_names.role,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.role
        })
    }
}

export default Role;