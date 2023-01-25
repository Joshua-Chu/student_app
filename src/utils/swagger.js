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

function swaggerDocs(app, port) {
  // Swagger page
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  console.log(`Docs available at http://localhost:${port}/docs`);
}

module.exports = swaggerDocs;
