import {
  AccountHistoryRecord,
  newAccountHistoryRecord
} from "./AccountHistoryRecord";
import { HeaderRecord, newHeaderRecord } from "./HeaderRecord";
import { newTrailerRecord, TrailerRecord } from "./TrailerRecord";
import { Consumer, newConsumer } from "./Consumer";
import {
  ConsumerAddressRecord,
  newConsumerAddressRecord
} from "./ConsumerAddressRecord";
import { Account, newAccount } from "./Account";

export const EOL = String.fromCharCode(13, 10);

class ConsumerBlocks {
  consumer: Consumer;
  addresses: ConsumerAddressRecord[] = [];

  constructor() {
    this.consumer = newConsumer();
  }

  addAddress() {
    const address = newConsumerAddressRecord();
    this.addresses.push(address);

    return address;
  }

  toString() {
    return (
      this.consumer.toString() +
      EOL +
      this.addresses.map(address => address.toString()).join(EOL)
    );
  }
}

class AccountBlocks {
  account: Account;
  histories: AccountHistoryRecord[] = [];
  consumers: ConsumerBlocks[] = [];

  constructor() {
    this.account = newAccount();
  }

  addHistory() {
    const history = newAccountHistoryRecord();
    this.histories.push(history);

    return history;
  }

  addConsumerBlock() {
    const consumer = new ConsumerBlocks();
    this.consumers.push(consumer);

    return consumer;
  }

  toString() {
    return (
      this.account.toString() +
      EOL +
      (this.histories.length > 0
        ? this.histories.map(history => history.toString()).join(EOL) + EOL
        : "") +
      this.consumers.map(consumer => consumer.toString()).join(EOL)
    );
  }
}

export default class TakeOn {
  header: HeaderRecord;
  accounts: AccountBlocks[] = [];
  trailer: TrailerRecord;

  constructor() {
    this.header = newHeaderRecord();
    this.trailer = newTrailerRecord();
  }

  addAccount() {
    const accountBlock = new AccountBlocks();
    this.accounts.push(accountBlock);
    return accountBlock;
  }

  calculateTrailer() {
    let totalHistoryRecords = 0;
    let totalNameRecords = 0;
    let totalAddressRecords = 0;

    this.accounts.forEach((account) => {
        totalHistoryRecords += account.histories.length;
        totalNameRecords    += account.consumers.length;

        totalAddressRecords = account.consumers.reduce((sum, consumerBlock) => {
            return sum = sum + consumerBlock.addresses.length;
        }, totalAddressRecords)
    });

    this.trailer.totalAccountRecords = this.accounts.length;
    this.trailer.totalHistoryRecords = totalHistoryRecords;
    this.trailer.totalNameRecords    = totalNameRecords;
    this.trailer.totalAddressRecords = totalAddressRecords;

//     console.log("trailer calc: totalAccountRecords: %i; totalHistoryRecords: %i; totalNameRecords: %i; totalAddressRecords: %i",
//         this.trailer.totalAccountRecords, this.trailer.totalHistoryRecords, this.trailer.totalNameRecords, this.trailer.totalAddressRecords
//     );
  }

  toString() {
    this.calculateTrailer();

    return (
      this.header.toString() +
      EOL +
      this.accounts.map(account => account.toString()).join(EOL) +
      EOL +
      this.trailer.toString()
    );
  }
}
