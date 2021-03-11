import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { GetUser } from 'src/users/getUser.decorator';
import { User } from 'src/users/models/user.model';

import { AnswersService } from './answers.service';
import { CreateAnswerInput } from './inputs/createAnswerInput';
import { ListAnswersInput } from './inputs/listAnswersInput';
import { Answer } from './models/answer.model';

@Resolver()
export class AnswersResolver {
  constructor(private answersService: AnswersService) {}

  @Query(() => Answer, { name: 'answer' })
  async getAnswer(
    @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.answersService.findOneById(id);
  }

  @Query(() => [Answer], { name: 'answers' })
  async getSurveys(
    @Args('filters', { nullable: true }) filters: ListAnswersInput,
  ) {
    return this.answersService.list(filters);
  }

  @Mutation(() => Answer)
  async createAnswer(
    @Args('payload') payload: CreateAnswerInput,
    @GetUser() user: User,
  ) {
    return this.answersService.create(payload, user._id);
  }
}
