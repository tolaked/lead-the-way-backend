const express = require("express")

const mainRouter = express.Router();

const surveys = require("./surveys")


mainRouter.use("/api/v1/surveys", surveys)

module.exports = mainRouter
