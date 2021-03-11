import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateQuestionsInput } from './inputs/createQuestionInput';
import { ListQuestionsInput } from './inputs/listQuestionsInput';
import { UpdateQuestionInput } from './inputs/updateQuestionInput';
import { Question, QuestionDocument } from './models/question.model';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private questionModel: Model<QuestionDocument>,
  ) {}

  async findOneById(_id: MongooseSchema.Types.ObjectId): Promise<Question> {
    return this.questionModel.findById(_id);
  }

  async list(filters: ListQuestionsInput): Promise<Question[]> {
    return this.questionModel.find({ ...filters });
  }

  async create(payload: CreateQuestionsInput): Promise<Question> {
    const newQuestion = await this.questionModel.create(payload);
    return newQuestion.save();
  }

  async update({ _id, ...payload }: UpdateQuestionInput): Promise<Question> {
    return await this.questionModel.findOneAndUpdate(_id, payload, {
      new: true,
    });
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.questionModel.findByIdAndDelete(_id);
  }
}
