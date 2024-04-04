import router from 'koa-joi-router';

import { echo } from './handler';

const joi = router.Joi;
const route = router();

route.route({
  method: 'post',
  path: '/echo',
  validate: {
    type: 'json',
    body: joi.any(),
  },
  handler: echo,
});

route.prefix('/v1');

export default route;
