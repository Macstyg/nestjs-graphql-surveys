import { Field, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

import { UserAnswer } from '../answer.types';

@ObjectType()
@Schema()
export class Answer {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field(() => String)
  @Prop()
  surveyId: MongooseSchema.Types.ObjectId;

  // TODO implement different types of values for different question types
  @Field(() => [UserAnswer])
  @Prop()
  userAnswers: UserAnswer[];
}

export type AnswerDocument = Answer & Document;

export const AnswerSchema = SchemaFactory.createForClass(Answer);
