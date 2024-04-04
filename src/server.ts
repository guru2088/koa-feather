import setRequestId from './middleware/setRequestId';
import { registerRoutes } from './routes';
import { feathers } from '@feathersjs/feathers';
import { koa, errorHandler, bodyParser, rest } from '@feathersjs/koa';

const app = koa(feathers());

app.use(errorHandler());
app.use(bodyParser());
app.configure(rest());
app.use(setRequestId);

registerRoutes(app);

export default app;
