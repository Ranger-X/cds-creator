import { objectCreator, FiledType } from "./creator";
import { Character, Numeric, NumericMN, DateFormat } from "./descriptors";

import type { NumericType, CharacterType, DateFormatType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300100") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "consumerAccount", descriptor: Character(40) },
  { name: "specialInstructionIndicator", descriptor: Character(1) },
  { name: "newAccountNumber", descriptor: Character(40) },
  { name: "accountOpenDate", descriptor: DateFormat() },
  { name: "accountClass", descriptor: Character(1) },
  { name: "numberOfAccountHolders", descriptor: Numeric(2) },
  { name: "currencyCode", descriptor: Character(3) },
  { name: "purposeOfFinance", descriptor: Character(2) },
  { name: "amountOfFinance", descriptor: Numeric(15) },
  { name: "durationOfAgreemet", descriptor: Numeric(3) },
  { name: "durationUnit", descriptor: Character(2) },
  { name: "paymentFrequency", descriptor: Character(2) },
  { name: "instalmentAmount", descriptor: Numeric(15) },
  { name: "creditLimit", descriptor: Numeric(15) },
  { name: "creditFacilityStatus", descriptor: Character(1) },
  { name: "accountPaymentStatus", descriptor: Character(1) },
  { name: "typeOfSecurity", descriptor: Character(2) },
  { name: "insuredLoan", descriptor: Character(1) },
  { name: "amountInsuredLoad", descriptor: Numeric(15) },
  { name: "interestRate", descriptor: NumericMN(4, 3) },
  { name: "totalOutstandingBalance", descriptor: Numeric(15) },
  { name: "arrearsBalance", descriptor: Numeric(15) },
  { name: "obligationsFulfilmentDueDate", descriptor: DateFormat() },
  { name: "dateOfLastPayment", descriptor: DateFormat() },
  { name: "accountClosedDate", descriptor: DateFormat() },
  { name: "defaultDate", descriptor: DateFormat() },
  { name: "litigationDate", descriptor: DateFormat() },
  { name: "writeOffDate", descriptor: DateFormat() },
  { name: "reasonForClosure", descriptor: Character(2) },
  { name: "accountSpecialStatus", descriptor: Character(2) },
  { name: "dateOfLastMissedPayment", descriptor: DateFormat() },
  { name: "recordDeleteIndicator", descriptor: Character(1) },
  { name: "recordBlock", descriptor: Character(1) },
  { name: "totalAmountOfFinance", descriptor: Numeric(15) },
  { name: "securedAmount", descriptor: Numeric(15) },
  { name: "securityStartDate", descriptor: DateFormat() },
  { name: "securityEndDate", descriptor: DateFormat() },
  { name: "interestPaymentDate", descriptor: DateFormat() },
  { name: "sourceOfPayment", descriptor: Character(2) },
  { name: "applicationNumber", descriptor: Character(40) },
  { name: "infoPartFlag", descriptor: Character(1) },
  { name: "CBRFinanceType", descriptor: Character(3) },
  { name: "legalAccountNumber", descriptor: Character(80) },
  { name: "totalCostOfFinanceInPercent", descriptor: NumericMN(4, 3) },
  { name: "subscriberComments", descriptor: Character(250) },
  { name: "accountHolderComments", descriptor: Character(150) },
  { name: "uniqueLoanIdentifier", descriptor: Character(70) },
  { name: "currentBalance", descriptor: Numeric(15) },
  { name: "actualPaymentAmount", descriptor: NumericMN(15, 2) },
  { name: "actualPaymentAmountMoreThan30Days", descriptor: NumericMN(15, 2) },
  { name: "actualPaymentDate", descriptor: DateFormat() },
];

export type Account = {
  recordType: NumericType;
  versionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  consumerAccount: CharacterType;
  specialInstructionIndicator: CharacterType;
  newAccountNumber: CharacterType;
  accountOpenDate: DateFormatType;
  accountClass: CharacterType;
  numberOfAccountHolders: NumericType;
  currencyCode: CharacterType;
  purposeOfFinance: CharacterType;
  amountOfFinance: NumericType;
  durationOfAgreemet: NumericType;
  durationUnit: CharacterType;
  paymentFrequency: CharacterType;
  instalmentAmount: NumericType;
  creditLimit: NumericType;
  creditFacilityStatus: CharacterType;
  accountPaymentStatus: CharacterType;
  typeOfSecurity: CharacterType;
  insuredLoan: CharacterType;
  amountInsuredLoad: NumericType;
  interestRate: NumericType;
  totalOutstandingBalance: NumericType;
  arrearsBalance: NumericType;
  obligationsFulfilmentDueDate: DateFormatType;
  dateOfLastPayment: DateFormatType;
  accountClosedDate: DateFormatType;
  defaultDate: DateFormatType;
  litigationDate: DateFormatType;
  writeOffDate: DateFormatType;
  reasonForClosure: CharacterType;
  accountSpecialStatus: CharacterType;
  dateOfLastMissedPayment: DateFormatType;
  recordDeleteIndicator: CharacterType;
  recordBlock: CharacterType;
  totalAmountOfFinance: NumericType;
  securedAmount: NumericType;
  securityStartDate: DateFormatType;
  securityEndDate: DateFormatType;
  interestPaymentDate: DateFormatType;
  sourceOfPayment: CharacterType;
  applicationNumber: CharacterType;
  infoPartFlag: CharacterType;
  CBRFinanceType: CharacterType;
  legalAccountNumber: CharacterType;
  totalCostOfFinanceInPercent: NumericType;
  subscriberComments: CharacterType;
  accountHolderComments: CharacterType;
  uniqueLoanIdentifier: CharacterType;
  currentBalance: NumericType;
  actualPaymentAmount: NumericType;
  actualPaymentAmountMoreThan30Days: NumericType;
  actualPaymentDate: DateFormatType;

  toString: () => string;
};

export const newAccount = objectCreator<Account>(fields);
