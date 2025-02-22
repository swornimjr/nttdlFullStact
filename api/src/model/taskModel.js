//  This file has functios to exxecute the queries!!!!!
//  Database operations
//CRUD opearations -->

import taskSchema from "../schema/taskSchema.js";

//for get endpoint
export const getTasks = () => {
  return taskSchema.find();
};

export const getTask = (id) => {
  return taskSchema.findById(id);
};

//create
export const createTask = (taskObject) => {
  return taskSchema(taskObject).save();
};

//update
export const updateTask = (id, updatedData) => {
  return taskSchema.findByIdAndUpdate(id, updatedData);
};

//update
export const deleteTask = (id) => {
  return taskSchema.findByIdAndDelete(id);
};
