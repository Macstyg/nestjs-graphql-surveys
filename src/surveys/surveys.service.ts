import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Schema as MongooseSchema } from 'mongoose';

import { CreateSurveyInput } from './inputs/createSurveyInput';
import { ListSurveyInput } from './inputs/listSurveyInput';
import { UpdateSurveyInput } from './inputs/updateSurveyInput';
import { Survey, SurveyDocument } from './models/survey.model';

@Injectable()
export class SurveysService {
  constructor(
    @InjectModel(Survey.name) private surveyModel: Model<SurveyDocument>,
  ) {}

  async findOneById(_id: MongooseSchema.Types.ObjectId): Promise<Survey> {
    return this.surveyModel.findById(_id);
  }

  async create(
    payload: CreateSurveyInput,
    userId: MongooseSchema.Types.ObjectId,
  ): Promise<Survey> {
    const newSurvey = await this.surveyModel.create({ ...payload, userId });
    return newSurvey.save();
  }

  async update({ _id, ...payload }: UpdateSurveyInput): Promise<Survey> {
    return await this.surveyModel.findOneAndUpdate(_id, payload, {
      new: true,
    });
  }

  async list(filters: ListSurveyInput): Promise<Survey[]> {
    return await this.surveyModel.find({ ...filters });
  }

  async delete(_id: MongooseSchema.Types.ObjectId) {
    return await this.surveyModel.findByIdAndDelete(_id);
  }
}
