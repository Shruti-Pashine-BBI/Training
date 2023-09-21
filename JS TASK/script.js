class Account {
  constructor(Account_Holder_Name, balance = 0) {
    this.Account_Number = Math.trunc(Math.random() * 600000000000) + 1;
    this.Account_Holder_Name = Account_Holder_Name;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Sufficient Amount: ${this.balance}`);
    } else {
      console.log("balance is insufficient.");
    }
  }
  withdraw(amount) {
    if (amount > 0) {
      this.balance -= amount;
      console.log(`Withdrawl Money:${amount}`);
      console.log(`Bank Balance: ${this.balance}`);
    } else {
      console.log("balance is insufficient.");
    }
  }
  getAccountDetails() {
    return `Account Number: ${this.Account_Number}\nAccount Holder: ${this.Account_Holder_Name}\nBalance: $${this.balance}`;
  }
}
class Bank {
  constructor(bankName) {
    //this.Account = new Account();
    this.bankName = bankName;
    this.accounts = [];
  }

  createAccount(accountHolderName) {
    {
      const account = new Account(accountHolderName);
      this.accounts.push(account);
      return `Account created successfully. Account Number: ${account.accountNumber}`;
    }
  }
  getAllAccounts() {
    this.accounts.forEach((element) => console.log(element));
  }
}

// const Account_object = new Account("shruti");
// console.log(Account_object);
// Account_object.Deposit(7000);
// Account_object.withdraw(6000);
// Account_object.Deposit(700);
// Account_object.withdraw(600);

const BankObj = new Bank("SBI");
BankObj.createAccount("Mahi");
BankObj.createAccount("John");
BankObj.getAllAccounts();
const Account1 = BankObj.accounts[0];
console.log(Account1.deposit(8000));
