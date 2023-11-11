
// EXERCISE 13
// Return an array of bank accounts that have a sum of deposits less than 2000 or no deposits at all
// Array example: bankAccounts in /data/data.js
// getAllAccountsWithSumsOfDepositsLess2000(bankAccounts) => [3432, 43242.34, 23432]

export function getAllAccountsWithSumsOfDepositsLess2000(array) {
  // Your code goes here...
 let accountsWithLessDeposits = [];

 for (let i = 0; i < array.length; i++) {
  let account = array[i];
  let sumDeposits = 0;

  if (account.deposits) {
    for (let j = 0; j < account.deposits.length; j++) {
      sumDeposits += account.deposits[j];
    }
  }
  if (sumDeposits < 2000 || account.deposits.length === 0) {
    accountsWithLessDeposits.push(account);
  }
 }
return accountsWithLessDeposits;


}
// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
