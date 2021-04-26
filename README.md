# cds-creator
creator CDS-files


## Install
//TODO

## Use

```js
import { TakeOn } from "@karmared/cds-creator";
import fs from "fs";
import iconv from "iconv-lite";

const file = new TakeOn();

const subscriberCode = 00999;
const financeType = "02";
const consumerAccount = "01/20";

const header = file.header;
header.subscriberCode = subscriberCode;
header.financeType = financeType;
header.formatID = "cp1251";
header.groupID = "GROUP_ID";
header.userID = "USER_ID";
header.subscriberName = "OOO Subscriber";
header.accountingDate = "2021-04-26";
header.filePreparationDate = header.accountingDate; //new Date();

// ...

const accountBlock = file.addAccount();
const account = accountBlock.account;

account.versionNumber = 5;
account.subscriberCode = subscriberCode;
account.financeType = financeType;
account.consumerAccount = consumerAccount;
account.accountOpenDate = "2020-11-24";
account.accountClass = 1;
account.numberOfAccountHolders = "01";
account.currencyCode = "RUB";
account.amountOfFinance = 6000;
account.durationOfAgreement = 6; // кол-во месяцев
account.durationUnit = "03"; // месяцы
account.paymentFrequency = "07"; // раз в год
account.instalmentAmount = 0;
account.accountPaymentStatus = "0";
account.totalOutstandingBalance = 0;
account.arrearsBalance = 0;
account.obligationsFulfilmentDueDate = "2021-05-24";
account.dateOfLastPayment = "2021-04-26";
account.accountClosedDate = "2021-04-26";
account.reasonForClosure = "17"; // досрочное погашение
account.totalAmountOfFinance = 7999; // 7999.80
account.sourceOfPayment = "01";
account.infoPartFlag = "1";
account.CBRFinanceType = "021";
account.legalAccountNumber = consumerAccount;
account.totalCostOfFinanceInPercent = 66.527;
account.uniqueLoanIdentifier = "uuid"; // use uuid-gen  and calculate control digit yourself
account.currentBalance = 0;
account.actualPaymentAmount = 7999.80;
account.actualPaymentAmountMoreThan30Days = account.actualPaymentAmount;
account.actualPaymentDate = "2021-04-26";
// ...

const history = accountBlock.addHistory();
history.subscriberCode = subscriberCode;
history.financeType = financeType;
history.consumerAccountNumber = consumerAccount;
history.historyRecordNumber = 1;
history.accountPaymentStatus = "0";
history.totalOutstandingBalance = 0;
history.sourceOfPayment = "01";
history.historyDate = "2021-04-26";
history.instalmentAmount = 0;
history.arrearsBalance = 0;
history.currentBalance = 0;
history.actualPaymentAmount = account.actualPaymentAmount;
history.actualPaymentAmountMoreThan30Days = history.actualPaymentAmount;
history.actualPaymentDate = account.actualPaymentDate;


// added consumer block: {consumer, addresses}
const consumerBlock = accountBlock.addConsumerBlock();
consumerBlock.consumer.subscriberCode = subscriberCode;
consumerBlock.consumer.financeType = financeType;
consumerBlock.consumer.consumerAccountNumber = consumerAccount;
consumerBlock.consumer.accountHolderNumber = 1;
consumerBlock.consumer.accountHolderType = "01";
consumerBlock.consumer.primaryIDType = "01";
consumerBlock.consumer.primaryIDNumber = "1111222333";
consumerBlock.consumer.primaryIDIssueDate = "2000-02-10";
consumerBlock.consumer.primaryIDPlaceOfIssue = "Г. МОСКВА";
consumerBlock.consumer.primaryIDAuthority = "МОСКОВСКИМ РУВД"; // название органа, выдавшего паспорт
consumerBlock.consumer.suppliedNameFormat = "1";
consumerBlock.consumer.firstName = "ИМЯ";
consumerBlock.consumer.surname = "ФАМИЛИЯ";
consumerBlock.consumer.sexCode = "2"; // 2 - женский пол, 1 - мужской
consumerBlock.consumer.birthDate = "1999-09-09";
consumerBlock.consumer.placeOfBirth = "Г. МОСКВА";
consumerBlock.consumer.citizenship = "RU";
consumerBlock.consumer.consentIndicator = "0";
consumerBlock.consumer.primaryIDAuthorityCode = "001-001"; // код подразделения


const address = consumerBlock.addAddress();

address.subscriberCode = subscriberCode;
address.financeType = financeType;
address.consumerAccountNumber = consumerAccount;
address.accountHolderNumber = 1;
address.addressCurrent = "0";
address.addressType = "1";
address.suppliedAddressFormat = "1";
address.flatNr = "1";
address.houseNr = "235";
address.buildingConstructionNr = "Д";
address.prospect = "МИРА";
address.town = "МОСКВА";
address.republic = 99;
address.country = "RU";

const cdsFileName = new Date().toISOString().replace(/T/, '').replace(/:/g, '').replace(/\..+/, '') + ".cds";

var buf = iconv.encode(file.toString(), 'win1251');

// save data in CDS-file
fs.writeFileSync("/data/" + cdsFileName, buf);
```

## Generate test.cds
```bash
# create file cds.mjs in current dir with code above
# go to dir with code and do:
docker build -t cds .
docker run -it -v $(pwd)/data:/data -v $(pwd):/scripts cds

# now you should get ./data/test.cds file
```