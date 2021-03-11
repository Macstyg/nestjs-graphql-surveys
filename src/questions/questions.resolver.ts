import { Resolver, Query, Args } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

import { Question } from './models/question.model';
import { QuestionsService } from './questions.service';

@Resolver(() => Question)
export class QuestionsResolver {
  constructor(private questionsService: QuestionsService) {}

  @Query(() => Question, { name: 'question' })
  async getQuestion(
    @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.questionsService.findOneById(id);
  }
}
