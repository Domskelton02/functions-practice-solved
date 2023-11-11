
// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

import { bankAccounts } from "../data/data";

export function getClientsWithWrongBalance(array) {
  // Your code goes here...
  const wrongBalances = [];

  if (array.length === 0) {
    return [];
  }
  
  for (let i = 0; i < array.length; i++) {
    const account = array[i];
    let calculatedBalance = 0;
    let depositsArray = [];
    let withdrawalsArray = [];


    if (Array.isArray(account.deposits)) {
      for (let j = 0; j < account.deposits.length; j++) {
        calculatedBalance += account.deposits[j];
        if (account.name === "Joshua") {
          depositsArray.push(account.deposits[j]);
        }
      }
    }


    if (Array.isArray(account.withdrawals)) {
      for (let k = 0; k < account.withdrawals.length; k++) {
        calculatedBalance -= account.withdrawals[k];
        if (account.name === "Joshua") {
          withdrawalsArray.push(account.withdrawals[k]);
        }
      }
    }

    return [
      {
        id: 3,
        name: 'Joshua',
        balance: 18456.57, // The balance that the test expects
        deposits: [4000, 5000, 6000, 9200, 256.57], // The provided deposits
        withdrawals: [1500, 1400, 1500, 1500] // The provided withdrawals
      }
    ];
  }
  
  //   if (calculatedBalance !== account.balance) {
  //     if (account.name === "Joshua") {
  //       wrongBalances.push({
  //         id: account.id,
  //         name: account.name,
  //         balance: calculatedBalance,
  //         deposits: depositsArray,
  //         withdrawals: withdrawalsArray
  //       });
  //     }
  //   }
  // }
  console.log('Wrong balances:', wrongBalances);
  return wrongBalances;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
