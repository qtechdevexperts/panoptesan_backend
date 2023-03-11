import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import User from "./user.js";

const model = {
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
};

class UserWord extends Model {
    static initialize(sequelize) {
        UserWord.init(model, {
            sequelize,
            modelName: table_names.userWord,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.userWord
        });

        UserWord.removeAttribute('id');
    }
}

export default UserWord;