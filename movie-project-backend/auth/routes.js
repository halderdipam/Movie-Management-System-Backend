
const { Router } = require('express');
const authRouter = Router()
const { registerAuth,loginAuth,deleteUsers}=require("./api/index");

authRouter.post("/register",registerAuth);
authRouter.post("/login",loginAuth);
authRouter.delete("/delete/:id",deleteUsers);

module.exports = {authRouter};