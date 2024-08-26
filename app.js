import "dotenv/config";
import express from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import { connectDb } from "./mongoose.js";
import { errorHandler } from "./errorhandler.js";
const productrouter = require("./api/routes/products.js");
//import routes from "./src/routes/index.js";

const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: false }));

app.use(
  cors({
    origin: [ "http://localhost:5173"],
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
  })
); 

app.use(productrouter)

app.get("/", (req, res, next) => {
  console.log("connection successful");
  res.status(200).json({
    message: "connection success",
  });
});

//app.use(routes);

app.use(errorHandler);

await connectDb();

export default app;