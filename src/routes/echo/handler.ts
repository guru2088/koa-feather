import { Context } from 'koa';

export const echo = (ctx: Context): void => {
  ctx.status = 200;
  ctx.body = ctx.request.body;
};
