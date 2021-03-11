import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserAnswer {
  @Field()
  questionId: string;

  @Field(() => [String])
  values: string[];
}
