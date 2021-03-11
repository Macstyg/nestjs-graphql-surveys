import { registerEnumType } from '@nestjs/graphql';

export enum QuestionType {
  MULTIPLE_CHOISE = 'multipleChoise',
  CHECKBOX = 'checkbox',
  STAR = 'star',
  SINGLE_TEXT = 'singleText',
  DATE_TIME = 'dateTime',
}

registerEnumType(QuestionType, {
  name: 'QuestionType',
});
