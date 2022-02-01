"use strict";
const Router = require("koa-router");
const { logger } = require("../middlewares/logger");
const router = new Router();
logger.category = "[user]";
router.prefix("/user");
router.post("/verify", async (ctx, next) => {
  ctx.msg = "获取成功";
  ctx.result = "hello wolrd";
  return next();
});

router.get("/info", async (ctx, next) => {
  ctx.msg = "获取成功";
  ctx.result = "hello wolrd";
  return next();
});

module.exports = router;
