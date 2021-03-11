import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';
import { Question } from 'src/questions/models/question.model';
import { QuestionsService } from 'src/questions/questions.service';
import { GetUser } from 'src/users/getUser.decorator';
import { User } from 'src/users/models/user.model';
import { CreateSurveyInput } from './inputs/createSurveyInput';
import { ListSurveyInput } from './inputs/listSurveyInput';
import { UpdateSurveyInput } from './inputs/updateSurveyInput';

import { Survey, SurveyDocument } from './models/survey.model';
import { SurveysService } from './surveys.service';

@Resolver(() => Survey)
export class SurveysResolver {
  constructor(
    private surveysService: SurveysService,
    private questionsService: QuestionsService,
  ) {}

  @ResolveField()
  async questions(
    @Parent() survey: SurveyDocument,
    @Args('populate') populate: boolean,
  ) {
    if (populate) {
      await survey
        .populate({ path: 'questions', model: Question.name })
        .execPopulate();
    }
    return survey.questions;
  }

  @Query(() => Survey, { name: 'survey' })
  async getSurvey(
    @Args('id', { type: () => String }) id: MongooseSchema.Types.ObjectId,
  ) {
    return this.surveysService.findOneById(id);
  }

  @Query(() => [Survey], { name: 'surveys' })
  async getSurveys(
    @Args('filters', { nullable: true }) filters: ListSurveyInput,
  ) {
    return this.surveysService.list(filters);
  }

  @Mutation(() => Survey)
  async createSurvey(
    @Args('payload') payload: CreateSurveyInput,
    @GetUser() user: User,
  ) {
    return this.surveysService.create(payload, user._id);
  }

  @Mutation(() => Survey)
  async updateSurvey(@Args('payload') payload: UpdateSurveyInput) {
    return this.surveysService.update(payload);
  }

  @Mutation(() => Survey)
  async deleteSurvey(
    @Args('_id', { type: () => String }) _id: MongooseSchema.Types.ObjectId,
  ) {
    return this.surveysService.delete(_id);
  }
}
