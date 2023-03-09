import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import User from "./user.js";
import Role from "./role.js";

const model = {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    role_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class UserRoleMap extends Model {
    static initialize(sequelize) {
        UserRoleMap.init(model, {
            sequelize,
            modelName: table_names.userRole,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.userRole
        });

        User.belongsToMany(Role, { through: table_names.userRole, timestamps: false });
        Role.belongsToMany(User, { through: table_names.userRole, timestamps: false });
    }
}

export default UserRoleMap;