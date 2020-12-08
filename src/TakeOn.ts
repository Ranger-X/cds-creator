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

export class TakeOn {
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

  toString() {
    return (
      this.header.toString() +
      EOL +
      this.accounts.map(account => account.toString()).join(EOL) +
      EOL +
      this.trailer.toString()
    );
  }
}
