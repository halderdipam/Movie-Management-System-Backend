const verifyUserToken = require("../middlewares/userAuth");
const { Router } = require('express');
const userRolesRouter = Router()
const { createUserRoles, deleteUserRoles } = require("./api/index");

userRolesRouter.post("/create", verifyUserToken, createUserRoles);
userRolesRouter.delete("/delete/:id", verifyUserToken, deleteUserRoles);

module.exports = { userRolesRouter };