import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class ListQuestionsInput {
  @Field(() => String, { nullable: true })
  surveyId?: MongooseSchema.Types.ObjectId;
}
