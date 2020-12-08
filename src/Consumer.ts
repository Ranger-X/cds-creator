import { objectCreator, FiledType } from "./creator";
import { Character, Numeric, DateFormat } from "./descriptors";

import type { NumericType, CharacterType, DateFormatType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300300") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "consumerAccountNumber", descriptor: Character(40) },
  { name: "accountHolderNumber", descriptor: Numeric(2) },
  { name: "specialInstructionIndicator", descriptor: Character(1) },
  { name: "accountHolderType", descriptor: Character(2) },
  { name: "primaryIDType", descriptor: Character(2) },
  { name: "primaryIDNumber", descriptor: Character(20) },
  { name: "primaryIDExpiryDate", descriptor: DateFormat() },
  { name: "primaryIDIssueDate", descriptor: DateFormat() },
  { name: "primaryIDPlaceOfIssue", descriptor: Character(30) },
  { name: "primaryIDAuthority", descriptor: Character(100) },
  { name: "secondaryIDType", descriptor: Character(2) },
  { name: "secondaryIDNumber", descriptor: Character(20) },
  { name: "secondaryIDExpiryDate", descriptor: DateFormat() },
  { name: "secondaryIDIssueDate", descriptor: DateFormat() },
  { name: "secondaryIDPlaceOfIssue", descriptor: Character(30) },
  { name: "secondaryIDAuthority", descriptor: Character(100) },
  { name: "SNILS", descriptor: Character(20) },
  { name: "privateEntrepreneurNumber", descriptor: Character(20) },
  { name: "privateEntrepreneurNumberIssueDate", descriptor: DateFormat() },
  { name: "privateEntrepreneurOGRNIP", descriptor: Character(20) },
  { name: "previousID", descriptor: Character(20) },
  { name: "suppliedNameFormat", descriptor: Character(1) },
  { name: "nameTitle", descriptor: Character(2) },
  { name: "firstName", descriptor: Character(100) },
  { name: "patronymic", descriptor: Character(100) },
  { name: "surname", descriptor: Character(150) },
  { name: "maidenName", descriptor: Character(100) },
  { name: "previousCompanyName", descriptor: Character(100) },
  { name: "sexCode", descriptor: Character(1) },
  { name: "birthDate", descriptor: DateFormat() },
  { name: "placeOfBirth", descriptor: Character(100) },
  { name: "citizenship", descriptor: Character(2) },
  { name: "consentIndicator", descriptor: Character(1) },
  { name: "dateConsentGiven", descriptor: DateFormat() },
  { name: "mobileTelephoneNumber", descriptor: Character(16) },
  { name: "subjectCode", descriptor: Character(15) },
  { name: "changeType", descriptor: Character(1) },
  { name: "primaryIDAuthorityCode", descriptor: Character(7) },
];

export type Consumer = {
  recordType: NumericType;
  varsionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  consumerAccountNumber: CharacterType;
  accountHolderNumber: NumericType;
  specialInstructionIndicator: CharacterType;
  accountHolderType: CharacterType;
  primaryIDType: CharacterType;
  primaryIDNumber: CharacterType;
  primaryIDExpiryDate: DateFormatType;
  primaryIDIssueDate: DateFormatType;
  primaryIDPlaceOfIssue: CharacterType;
  primaryIDAuthority: CharacterType;
  secondaryIDType: CharacterType;
  secondaryIDNumber: CharacterType;
  secondaryIDExpiryDate: DateFormatType;
  secondaryIDIssueDate: DateFormatType;
  secondaryIDPlaceOfIssue: CharacterType;
  secondaryIDAuthority: CharacterType;
  SNILS: CharacterType;
  privateEntrepreneurNumber: CharacterType;
  privateEntrepreneurNumberIssueDate: DateFormatType;
  privateEntrepreneurOGRNIP: CharacterType;
  previousID: CharacterType;
  suppliedNameFormat: CharacterType;
  nameTitle: CharacterType;
  firstName: CharacterType;
  patronymic: CharacterType;
  surname: CharacterType;
  maidenName: CharacterType;
  previousCompanyName: CharacterType;
  sexCode: CharacterType;
  birthDate: DateFormatType;
  placeOfBirth: CharacterType;
  citizenship: CharacterType;
  consentIndicator: CharacterType;
  dateConsentGiven: DateFormatType;
  mobileTelephoneNumber: CharacterType;
  subjectCode: CharacterType;
  changeType: CharacterType;
  primaryIDAuthorityCode: CharacterType;

  toString: () => string;
};

export const newConsumer = objectCreator<Consumer>(fields);
