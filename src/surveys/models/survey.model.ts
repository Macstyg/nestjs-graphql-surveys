import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { Question } from 'src/questions/models/question.model';
import { SurveyFormat, SurveyType } from '../survey.types';

@ObjectType()
@Schema()
export class Survey {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  @Prop()
  title: string;

  @Field(() => SurveyFormat)
  @Prop()
  format: SurveyFormat;

  @Field(() => SurveyType)
  @Prop()
  type: SurveyType;

  @Field()
  @Prop()
  userId: string;

  @Field(() => [Question])
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: Question.name })
  questions: MongooseSchema.Types.ObjectId[] | Question[];
}

export type SurveyDocument = Survey & Document;

export const SurveySchema = SchemaFactory.createForClass(Survey);
