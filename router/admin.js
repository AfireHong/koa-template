const Router = require("koa-router");
const { logger } = require("../middlewares/logger");
const jwt = require("../middlewares/jwt");
const router = new Router();
router.prefix("/admin");
router.use(jwt);
router.get("/userList", async (ctx, next) => {
  ctx.msg = "success";
  ctx.result = "成功";
  return next();
});
module.exports = router;
