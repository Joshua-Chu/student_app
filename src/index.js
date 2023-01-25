const express = require("express");
const swaggerDocs = require("./utils/swagger.js");

//routes
const studentRouter = require("./routes/studentRoutes.js");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// /students routes
app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(
    "Server is now up and running, listening to http://localhost:3000"
  );
  swaggerDocs(app, PORT);
});
