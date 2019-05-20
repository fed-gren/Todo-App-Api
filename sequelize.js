const Sequelize = require("sequelize");
const todoModel = require("./models/todo");

const sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL, {
  dialect: "mysql",
});

const todo = todoModel(sequelize, Sequelize);

sequelize
  .authenticate()
  .then(() => {
    console.info("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync({ force: true }).then(() => {
  console.log(`Database & tables created!`);
});

module.exports = {
  todo
};
