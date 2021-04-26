import { objectCreator, FiledType } from "./creator";
import { Character, Numeric, DateFormat } from "./descriptors";

import type { NumericType, CharacterType, DateFormatType } from "./descriptors";

const fields: FiledType[] = [
  { name: "recordType", descriptor: Numeric(6, "300500") },
  { name: "versionNumber", descriptor: Numeric(2, "05") },
  { name: "subscriberCode", descriptor: Numeric(5) },
  { name: "financeType", descriptor: Character(2) },
  { name: "consumerAccountNumber", descriptor: Character(40) },
  { name: "accountHolderNumber", descriptor: Numeric(2) },
  { name: "specialInstructionIndicator", descriptor: Character(1) },
  { name: "addressCurrent", descriptor: Character(1) },
  { name: "addressType", descriptor: Character(1) },
  { name: "addressStartDate", descriptor: DateFormat() },
  { name: "addressEndDate", descriptor: DateFormat() },
  { name: "suppliedAddressFormat", descriptor: Character(1) },
  { name: "flatNr", descriptor: Character(6) },
  { name: "houseNr", descriptor: Character(6) },
  { name: "buildingConstructionNr", descriptor: Character(6) },
  { name: "block", descriptor: Character(20) },
  { name: "prospect", descriptor: Character(50) },
  { name: "town", descriptor: Character(50) },
  { name: "district", descriptor: Character(100) },
  { name: "republic", descriptor: Numeric(2) },
  { name: "country", descriptor: Character(2) },
  { name: "postal", descriptor: Character(10) },
  { name: "homeTelephoneNumber", descriptor: Character(16) },
];

export type ConsumerAddressRecord = {
  recordType: NumericType;
  varsionNumber: NumericType;
  subscriberCode: NumericType;
  financeType: CharacterType;
  consumerAccountNumber: CharacterType;
  accountHolderNumber: NumericType;
  specialInstructionIndicator: CharacterType;
  addressCurrent: CharacterType;
  addressType: CharacterType;
  addressStartDate: DateFormatType;
  addressEndDate: DateFormatType;
  suppliedAddressFormat: CharacterType;
  flatNr: CharacterType;
  houseNr: CharacterType;
  buildingConstructionNr: CharacterType;
  block: CharacterType;
  prospect: CharacterType;
  town: CharacterType;
  district: CharacterType;
  republic: NumericType;
  country: CharacterType;
  postal: CharacterType;
  homeTelephoneNumber: CharacterType;

  toString: () => string;
};

export const newConsumerAddressRecord = objectCreator<ConsumerAddressRecord>(
  fields
);
