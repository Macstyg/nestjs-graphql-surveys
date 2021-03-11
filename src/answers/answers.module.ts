import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AnswersService } from './answers.service';
import { AnswersResolver } from './answers.resolver';
import { Answer, AnswerSchema } from './models/answer.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Answer.name, schema: AnswerSchema }]),
  ],
  providers: [AnswersService, AnswersResolver],
})
export class AnswersModule {}
