import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsModule } from 'src/questions/questions.module';
import { QuestionsService } from 'src/questions/questions.service';

import { Survey, SurveySchema } from './models/survey.model';
import { SurveysResolver } from './surveys.resolver';
import { SurveysService } from './surveys.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Survey.name, schema: SurveySchema }]),
    QuestionsModule,
  ],
  providers: [SurveysResolver, SurveysService, QuestionsService],
})
export class SurveysModule {}
