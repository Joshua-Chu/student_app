const express = require("express");
const swaggerDocs = require("./utils/swagger.js");

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

// /students routes
app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`Server is now up and running, listening to ${PORT}`);
  swaggerDocs(app);
});
