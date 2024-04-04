import Koa from 'koa';

import health from './health';
import greetings from './echo';

// Register routes
export const registerRoutes = (app: any): Koa => {
  app.use(health.middleware());
  app.use(greetings.middleware());
  return app;
};
