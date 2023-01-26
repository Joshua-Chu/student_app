const express = require("express");
const swaggerDocs = require("./utils/swagger.js");
const { sequelize, models, connectDB } = require("./models/index.js");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "src/.env" });
}

//routes
const studentRouter = require("./routes/studentRoutes.js");

const app = express();

const PORT = process.env.PORT;

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

app.use(async (req, res, next) => {
  req.context = {
    models,
  };
  next();
});

// /students routes
app.use("/students", studentRouter);

app.listen(PORT, async () => {
  console.log(`Server is now up and running, listening to ${PORT}`);
  swaggerDocs(app);
  await connectDB();
  sequelize.sync({ force: false }).then(() => {
    console.log("✅Synced database successfully...");
  });
});
