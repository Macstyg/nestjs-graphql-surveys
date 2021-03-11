import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';
import { CreateAnswerInput } from './inputs/createAnswerInput';
import { ListAnswersInput } from './inputs/listAnswersInput';

import { Answer, AnswerDocument } from './models/answer.model';

@Injectable()
export class AnswersService {
  constructor(
    @InjectModel(Answer.name) private answerModel: Model<AnswerDocument>,
  ) {}

  async findOneById(_id: MongooseSchema.Types.ObjectId): Promise<Answer> {
    return this.answerModel.findById(_id);
  }

  async create(
    payload: CreateAnswerInput,
    userId: MongooseSchema.Types.ObjectId,
  ): Promise<Answer> {
    const newSurvey = await this.answerModel.create({ ...payload, userId });
    return newSurvey.save();
  }

  async list(filters: ListAnswersInput): Promise<Answer[]> {
    return await this.answerModel.find({ ...filters });
  }
}
