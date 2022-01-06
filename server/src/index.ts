import express, { Express } from "express";
import "express-async-errors";
import { connect } from "mongoose";
import morgan from "morgan";
import { PostRouteHandler } from "../routes/post-route";
import { errorHandler } from "./../middlewares/errorHandler";
import { notFoundErrorHandler } from "../middlewares/notFoundErrorHandler";
import path from "path/posix";

const PORT = (process.env.PORT || 5000) as number;
const HOST = process.env.HOST || "localhost";

const app: Express = express();

/**
 * @setting Express Settings
 */
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
/**
 * @routes Express middlewares
 * @path post
 */

app.use(morgan("dev"));

app.use("/api/posts", PostRouteHandler);

app.all("*", notFoundErrorHandler);

app.use(errorHandler);

const asynStart = async () => {
  try {
    await connect("mongodb://localhost:27017", { dbName: "mevn-one" });
    console.log("🟢 DB mode is ON.");
    app.listen(PORT, HOST, () => {
      console.log("🚀 Server is up and running on http://" + HOST + ":" + PORT);
    });
  } catch (error) {
    console.log("🔴 DB mode is OFF.");
    console.error({ error });
  }
};

asynStart();
