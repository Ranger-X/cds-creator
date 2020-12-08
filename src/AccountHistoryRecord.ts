import { objectCreator, FiledType } from "./creator";
import { Character, Numeric, DateFormat, NumericMN } from "./descriptors";

import type { NumericType, CharacterType, DateFormatType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300210") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "consumerAccountNumber", descriptor: Character(40) },
  { name: "historyRecordNumber", descriptor: Numeric(4) },
  { name: "accountPaymentStatus", descriptor: Character(1) },
  { name: "totalOutstandingBalance", descriptor: Numeric(15) },
  { name: "sourceOfPayment", descriptor: Character(2) },
  { name: "historyDate", descriptor: DateFormat() },
  { name: "instalmentAmount", descriptor: Numeric(15) },
  { name: "arrearsBalance", descriptor: Numeric(15) },
  { name: "creditLimit", descriptor: Numeric(15) },
  { name: "currentBalance", descriptor: Numeric(15) },
  { name: "actualPaymentAmount", descriptor: NumericMN(15, 2) },
  { name: "actualPaymentAmountMoreThan30Days", descriptor: NumericMN(15, 2) },
  { name: "actualPaymentDate", descriptor: DateFormat() },
];

export type AccountHistoryRecord = {
  recordType: NumericType;
  varsionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  consumerAccountNumber: CharacterType;
  historyRecordNumber: NumericType;
  accountPaymentStatus: CharacterType;
  totalOutstandingBalance: NumericType;
  sourceOfPayment: CharacterType;
  historyDate: DateFormatType;
  instalmentAmount: NumericType;
  arrearsBalance: NumericType;
  creditLimit: NumericType;
  currentBalance: NumericType;
  actualPaymentAmount: NumericType;
  actualPaymentAmountMoreThan30Days: NumericType;
  actualPaymentDate: DateFormatType;

  toString: () => string;
};

export const newAccountHistoryRecord = objectCreator<AccountHistoryRecord>(
  fields
);
