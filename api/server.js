import express from "express";
import { connectToMongo } from "./config/dbConfig.js";
import taskRouter from "./src/router/taskRouter.js";

const app = express();

const PORT = 3000;

app.use(express.json());

//connect to mongo db calling from config
connectToMongo();

app.use("/api/tasks", taskRouter);

//task

app.listen(PORT, (error) => {
  error
    ? console.log("error", error)
    : console.log(
        "congrats your server is running successfully http://localhost:" + PORT
      );
});
