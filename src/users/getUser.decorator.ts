import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const GetUser = createParamDecorator((data, ctx: ExecutionContext) => {
  return {
    id: '1',
    firstName: 'Fake',
    lastName: 'User',
  };
});
