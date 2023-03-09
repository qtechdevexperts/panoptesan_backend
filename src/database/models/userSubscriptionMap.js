import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import User from "./user.js";
import Subscription from "./subscription.js";

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

    subscription_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class UserSubscriptionMap extends Model {
    static initialize(sequelize) {
        UserSubscriptionMap.init(model, {
            sequelize,
            modelName: table_names.userSubscription,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.userSubscription
        });

        User.belongsToMany(Subscription, { through: table_names.userSubscription, timestamps: false });
        Subscription.belongsToMany(User, { through: table_names.userSubscription, timestamps: false });
    }
}

export default UserSubscriptionMap;