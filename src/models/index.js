require("dotenv").config({ path: "src/.env" });
const Sequelize = require("sequelize");
const getStudentModel = require("./student.js");

const sequelize = new Sequelize(process.env.PGURI, { dialect: "postgres" });

const models = {
  Student: getStudentModel(sequelize, Sequelize),
};

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

module.exports = {
  sequelize,
  models,
  connectDB,
};
