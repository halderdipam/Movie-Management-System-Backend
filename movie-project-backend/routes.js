const { Router } = require("express");

const { authRouter } = require("./auth/routes");
const { movieRouter } = require("./movie/routes");
const { genreRouter } = require("./genre/routes");
const { starCastRouter } = require('./starCast/routes');
const { userRolesRouter } = require("./userRoles/routes");


const router = Router();

router.use("/api/auth", authRouter);
router.use("/api/movie", movieRouter);
router.use("/api/genre", genreRouter);
router.use("/api/starcast", starCastRouter);
router.use("/api/userroles", userRolesRouter)

module.exports = { router };
