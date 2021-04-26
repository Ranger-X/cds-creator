import { objectCreator, FiledType } from "./creator";
import { Character, Numeric } from "./descriptors";

import type { NumericType, CharacterType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300999") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "totalAccountRecords", descriptor: Numeric(9) },
  { name: "totalHistoryRecords", descriptor: Numeric(9) },
  { name: "totalNameRecords", descriptor: Numeric(9) },
  { name: "totalAddressRecords", descriptor: Numeric(9) },
  { name: "filler", descriptor: Numeric(9) },
  { name: "totalEmployerRecords", descriptor: Numeric(9) },
  { name: "filler1", descriptor: Numeric(9) },
  { name: "filler2", descriptor: Numeric(20) },
  { name: "totalLegalRecords", descriptor: Numeric(9) },
  { name: "totalWarrantyRecords", descriptor: Numeric(9) },
  { name: "totalWarrantyHistoryRecords", descriptor: Numeric(9) },
  { name: "totalGuaranteeRecords", descriptor: Numeric(9) },
  { name: "totalLienRecords", descriptor: Numeric(9) },
  { name: "totalGracePeriod", descriptor: Numeric(9) },
  { name: "totalAssigneeRecords", descriptor: Numeric(9) },
];

export type TrailerRecord = {
  recordType: NumericType;
  versionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  totalAccountRecords: NumericType;
  totalHistoryRecords: NumericType;
  totalNameRecords: NumericType;
  totalAddressRecords: NumericType;
  filler: NumericType;
  totalEmployerRecords: NumericType;
  filler1: NumericType;
  filler2: NumericType;
  totalLegalRecords: NumericType;
  totalWarrantyRecords: NumericType;
  totalWarrantyHistoryRecords: NumericType;
  totalGuaranteeRecords: NumericType;
  totalLienRecords: NumericType;
  totalGracePeriod: NumericType;
  totalAssigneeRecords: NumericType;

  toString: () => string;
};

export const newTrailerRecord = objectCreator<TrailerRecord>(fields);
