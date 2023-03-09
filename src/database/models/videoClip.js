import { DataTypes, Model } from "sequelize";
import table_names from "../table_names.js";
import User from "./user.js";

const model = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    url: {
        type: DataTypes.STRING,
        allowNull: false
    },

    driver_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

    is_active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
};

class VideoClip extends Model {
    static initialize(sequelize) {
        VideoClip.init(model, {
            sequelize,
            modelName: table_names.videoClip,
            timestamps: false,
            freezeTableName: true,
            tableName: table_names.videoClip
        });

        VideoClip.hasOne(User, {
            foreignKey: 'user_id'
        });
        User.belongsTo(VideoClip);
    }
}

export default VideoClip;