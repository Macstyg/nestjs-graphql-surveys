import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { SurveyFormat, SurveyType } from '../survey.types';

@InputType()
export class UpdateSurveyInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  title?: string;

  @Field(() => SurveyFormat)
  format?: SurveyFormat;

  @Field(() => SurveyType)
  type?: SurveyType;

  @Field(() => [String], { nullable: true })
  questions?: MongooseSchema.Types.ObjectId[];
}
