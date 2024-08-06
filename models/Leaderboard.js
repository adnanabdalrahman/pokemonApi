import sequelize from "../db/index.js";
import { DataTypes } from "sequelize";

const Leaderboard = sequelize.define('leaderboard', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
    score: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
},
    { tableName: 'leaderboard' }
);

export default Leaderboard;
