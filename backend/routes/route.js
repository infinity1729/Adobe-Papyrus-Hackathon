const express = require("express");
const requestRouter = express.Router();
const {getResume} = require("../controller/controller.js");
requestRouter.post("/",getResume);
module.exports=requestRouter;