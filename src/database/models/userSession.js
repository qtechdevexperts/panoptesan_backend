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

    token: {
        type: DataTypes.STRING,
        allowNull: true
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class UserSession extends Model {
    static initialize(sequelize) {
        UserSession.init(model, {
            sequelize,
            modelName: table_names.userSession,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.userSession
        });

        User.hasOne(UserSession, {
            foreignKey: 'user_id'
        });
        UserSession.belongsTo(User);
    }
}

export default UserSession;