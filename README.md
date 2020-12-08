# cds-creator
creator CDS-files


## Install
//TODO

## Use

```js
import { TakeOn } from "@karmared/cds-creator";
import fs from "fs"

const file = new TakeOn();

const header = file.header;
header.subscriberCode = 5;
header.financeType = 12;
header.formatID = "cp1251";
header.accountingDate = "2020-12-01";
header.filePreparationDate = new Date();
// ...

// added account block: {account, histories, consumers}
const accountBlock = file.addAccount();
const account = accountBlock.account;

account.versionNumber = 5;
account.accountOpenDate = new Date();
account.numberOfAccountHolders = 1;
account.currencyCode = "RUB";
// ...

const history = accountBlock.addHistory();
history.accountPaymentStatus = 0;

// added consumer block: {consumer, addresses}
const consumerBlock = accountBlock.addConsumerBlock();
consumerBlock.consumer.SNILS = "123131231";

const address = consumerBlock.addAddress()
address.accountHolderNumber = 1

// save data in CDS-file
fs.writeFileSync("./test.cds", file.toString());
```
