import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ListSurveyInput {
  @Field(() => String, { nullable: true })
  title?: string;
}
