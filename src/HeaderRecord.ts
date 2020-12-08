import { objectCreator, FiledType } from "./creator";
import { Character, Numeric, DateFormat } from "./descriptors";

import type { NumericType, CharacterType, DateFormatType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300000") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "formatID", descriptor: Character(10) },
  { name: "groupID", descriptor: Character(12) },
  { name: "userID", descriptor: Character(12) },
  { name: "filler", descriptor: Character(12) },
  { name: "subscriberName", descriptor: Character(40) },
  { name: "accountingDate", descriptor: DateFormat() },
  { name: "filePreparationDate", descriptor: DateFormat() },
];

export type HeaderRecord = {
  recordType: NumericType;
  varsionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  formatID: CharacterType;
  groupID: CharacterType;
  userID: CharacterType;
  filler: CharacterType;
  subscriberName: CharacterType;
  accountingDate: DateFormatType;
  filePreparationDate: DateFormatType;

  toString: () => string;
};

export const newHeaderRecord = objectCreator<HeaderRecord>(fields);
