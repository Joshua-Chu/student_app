const swaggerJsDocs = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const { version } = require("../../package.json");

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Express API for JSONPlaceholder",
    version: "1.0.0",
  },
};

const options = {
  swaggerDefinition,
  apis: ["src/routes/*.js"],
};

const swaggerSpec = swaggerJsDocs(options);

const swaggerDocs = (app) =>
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = swaggerDocs;
