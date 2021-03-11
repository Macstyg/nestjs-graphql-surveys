import { Field, InputType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateQuestionInput {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field()
  body: string;
}
