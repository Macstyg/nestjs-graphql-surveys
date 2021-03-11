import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { SurveyFormat, SurveyType } from '../survey.types';

@InputType()
export class CreateSurveyInput {
  @Field()
  title: string;

  @Field(() => SurveyFormat)
  format: SurveyFormat;

  @Field(() => SurveyType)
  type: SurveyType;

  @Field(() => [String])
  questions?: MongooseSchema.Types.ObjectId[];
}
