/*Module Patterns*/
//Initial Invoked Function Expression (IIFE):- Everything inside this function is private

// let bankBalance = 12000; //private variable for using it or changing it.
let Bank = (function () {
  let bankBalance = 12000; //private variable for using it or changing it.

  //These functions are in IIFE so we cannot use them directly from outside
  function checkBalance() {
    console.log(bankBalance);
  }
  function setBalance(val) {
    bankBalance = val;
  }
  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(
        `Your withdraw is successful. Your new balance is ${bankBalance}`
      );
    }
  }

  //Returning the functions which we want to use outside of IIFE
  return {
    checkBalance,
    setBalance,
    withdraw,
  };
})();

Bank.withdraw(11000);
