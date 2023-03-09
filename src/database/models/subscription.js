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

    price: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },

    currency_symbol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class Subscription extends Model {
    static initialize(sequelize) {
        Subscription.init(model, {
            sequelize,
            modelName: table_names.subscription,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.subscription
        })
    }
}

export default Subscription;