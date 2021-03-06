"use strict";

const { logger } = require("./logger");

const responseHandler = (ctx) => {
  if (ctx.result !== undefined) {
    ctx.type = "json";
    ctx.body = {
      code: 200,
      msg: ctx.msg || "",
      data: ctx.result,
    };
  }
};
const errorHandler = (ctx, next) => {
  return next().catch((err) => {
    if (err.code == null) {
      logger.error(err.stack);
    }
    ctx.body = {
      code: err.code || -1,
      data: null,
      msg: err.message.trim(),
    };
    ctx.status = 200; // 保证返回状态是 200, 这样前端不会抛出异常
    return Promise.resolve();
  });
};
module.exports = {
  responseHandler,
  errorHandler,
};
