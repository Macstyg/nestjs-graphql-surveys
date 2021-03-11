import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateAnswerInput {
  @Field(() => String)
  surveyId: MongooseSchema.Types.ObjectId;

  @Field(() => [UserAnswerInput])
  userAnswers: UserAnswerInput[];
}

@InputType()
class UserAnswerInput {
  @Field()
  questionId: string;

  @Field(() => [String])
  values: string[];
}
