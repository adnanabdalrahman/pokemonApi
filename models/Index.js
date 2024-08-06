import sequelize from '../db/index.js';

(async () => {
    await sequelize.sync({ force: true });
    console.log("Database synced");
})();