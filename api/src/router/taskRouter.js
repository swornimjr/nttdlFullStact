import express from "express";
import { createTask, getTask, getTasks } from "../model/taskModel.js";

const taskRouter = express.Router();

// Index | Get
taskRouter.get("/", (req, res) => {
  getTasks()
    .then((tasks) => {
      res.json({
        status: "success",
        data: tasks,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

// Show | Single id
taskRouter.get("/:id", (req, res) => {
  getTask()
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

//create post
taskRouter.post("/", (req, res) => {
  const taskOject = req.body;
  createTask(taskOject)
    .then((task) => {
      res.json({
        status: "success",
        message: "task created",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

//patch modify
taskRouter.patch("/:id", (req, res) => {
  const updatedTaskOject = req.body;
  const id = req.params.id;
  createTask(id, updatedTaskOject)
    .then((task) => {
      res.json({
        status: "success",
        message: "task created",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

taskRouter.delete("/:id", (req, res) => {
  const id = req.params.id;

  getTask(id)
    .then((task) => {
      res.json({
        status: "success",
        data: task,
      });
    })
    .catch((error) => {
      res.json({
        status: "error",
        data: error.message,
      });
    });
});

export default taskRouter;
