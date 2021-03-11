import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { QuestionType } from '../questions.types';

@InputType()
export class CreateQuestionsInput {
  @Field(() => String)
  surveyId: MongooseSchema.Types.ObjectId;

  @Field(() => QuestionType)
  type: QuestionType;

  @Field()
  body: string;
}
