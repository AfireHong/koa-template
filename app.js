const Koa = require("koa");

const { loggerMiddleware } = require("./middlewares/logger");
const { errorHandler, responseHandler } = require("./middlewares/response");
const bodyParser = require("koa-bodyparser");
const helmet = require("koa-helmet");
const routerHandler = require("./router");

const app = new Koa();
console.log("加载日志中间件...");
app.use(loggerMiddleware);
app.use(errorHandler);
app.use(bodyParser());
app.use(helmet());
console.log("加载路由...");
routerHandler(app);
console.log("加载响应中间件...");
app.use(responseHandler);
module.exports = app;
