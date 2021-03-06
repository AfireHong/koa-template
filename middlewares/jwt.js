"use strict";

const jwt = require("jsonwebtoken");
const config = require("../config");

module.exports = async function (ctx, next) {
  // 将 token 中的数据解密后存到 ctx 中
  try {
    if (typeof ctx.request.headers.authorization === "string") {
      const token = ctx.request.headers.authorization.slice(7);
      ctx.jwtData = jwt.verify(token, config.secret);
    } else {
      throw { code: 401, message: "no authorization" };
    }
  } catch (err) {
    throw { code: 401, message: err.message };
  }
  await next();
};
