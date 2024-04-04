import { createMockContext } from '@shopify/jest-koa-mocks';
import { echo } from './handler';

describe('echo', () => {
  it('should set echo message', () => {
    const ctx = createMockContext({ requestBody: { name: 'Broody' } });

    echo(ctx);

    expect(ctx.body).toEqual({ name: 'Broody' });
  });
});
