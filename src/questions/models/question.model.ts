import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { QuestionType } from '../questions.types';

@ObjectType()
@Schema()
export class Question {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => QuestionType)
  @Prop()
  type: QuestionType;

  @Field(() => String)
  @Prop()
  surveyId: MongooseSchema.Types.ObjectId;

  // TODO implement different types of body for different question types
  @Field()
  @Prop()
  body: string;
}

export type QuestionDocument = Question & Document;

export const QuestionSchema = SchemaFactory.createForClass(Question);
