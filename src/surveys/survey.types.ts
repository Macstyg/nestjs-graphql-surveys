import { registerEnumType } from '@nestjs/graphql';

export enum SurveyType {
  CLASSIC = 'classic',
  ONE_AT_TIME = 'oneAtTime',
}

export enum SurveyFormat {
  TARGETED = 'targeted',
  OWN_CONTACTS = 'ownContacts',
}

registerEnumType(SurveyType, {
  name: 'SurveyType',
});

registerEnumType(SurveyFormat, {
  name: 'SurveyFormat',
});
