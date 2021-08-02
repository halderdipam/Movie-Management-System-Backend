const verifyUserToken = require("../middlewares/userAuth");
const { Router } = require('express');
const starCastRouter = Router();
const { createStarCasts, getAllStarCasts, getStarCastAllMovies, updateStarCasts, deleteStarCasts } = require("./api/index");

starCastRouter.get("/allstarcasts", getAllStarCasts);
starCastRouter.get("/starcastmovies/:id", getStarCastAllMovies);
starCastRouter.post("/create", verifyUserToken, createStarCasts);
starCastRouter.delete("/delete/:id", verifyUserToken, deleteStarCasts);
starCastRouter.put("/update/:id", verifyUserToken, updateStarCasts);


module.exports = { starCastRouter };