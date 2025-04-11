/*1. Module Patterns*/
//Definition:- We create everything in IIFE and send only those things outside which we want to use outside.
//Initial Invoked Function Expression (IIFE):- Everything inside this function is private

// let bankBalance = 12000; //private variable for using it or changing it.
let Bank = (function () {
  let bankBalance = 12000; //private variable for using it or changing it.

  //These functions are in IIFE so we cannot use them directly from outside
  function checkBalance() {
    console.log(`Your balance is ${bankBalance}`);
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

Bank.withdraw(100);
Bank.checkBalance();
Bank.setBalance(100);
Bank.checkBalance();

// ------------------------------------------------------------
/*2. Revealing Module Patterns*/
//Same as module pattern almost but we can rename the object which we are returning.

let RevealBank = (function () {
  let bankBalance = 12000; //private variable for using it or changing it.

  //These functions are in IIFE so we cannot use them directly from outside
  function checkBalance() {
    console.log(`Your balance in Reveal${bankBalance}`);
  }
  function setBalance(val) {
    bankBalance = val;
  }
  function withdraw(val) {
    if (val <= bankBalance) {
      bankBalance -= val;
      console.log(
        `Your withdraw in Reveal is successful. Your new balance is ${bankBalance}`
      );
    }
  }

  //Returning the functions which we want to use outside of IIFE
  return {
    check: checkBalance,
    set: setBalance,
    draw: withdraw,
  };
})();
RevealBank.draw(100);

// ------------------------------------------------------------
/*3. Factory Function Patterns*/
//Definition:- It is a function which creates/returns an object. We can create multiple objects using this function.
//It creates new objects without using class/constructor or "new" keyword.
//We control object creation using a function.

function createProduct(name, price) {
  let stock = 10;
  //Returning an object
  return {
    name, //Shorthand property (nouns)
    price,
    checkStock() {
      console.log(`We have ${stock} pieces left.`);
    }, //Method (Verbs) inside an object- Simply a function that belongs to an Object.
    buy(qty) {
      if (qty <= stock) {
        stock -= qty;
        console.log(`${qty} pieces booked and ${stock} pieces left.`);
      } else {
        console.log(`We have only ${stock} pieces left.`);
      }
    },
    refill(qty) {
      stock += qty;
      console.log(`Refilled the stock -${stock} pieces available.`);
    },
  };
}
//Both Variables have separate memory space and have their own data.
let iphone = createProduct("Iphone", 70000); //CreateProduct is factory function which returns an object and that object is now in iphone variable.
//Whenever we run createProduct function, it creates a new object.
// iphone.buy(6);
// iphone.checkStock();
let kitkat = createProduct("Kitkat", 10);

// ------------------------------------------------------------

class YoutubeChannel {
  //Constructor is a special function that automatically runs when an object is created from a class.
  //It is used to initialize the properties of the object.
  constructor(name, subscribers) {
    this.subscribers = []; //Array to hold subscribers
  }
  subscribe(user) { //Method to subscribe a user
    this.subscribers.push(user); //Add user to subscribers array
    user.update("You have subscribed to the channel"); //Notify user of subscription
  }
  unsubscribe(user) {}
  notify() {}
}
class User {
  constructor(name) {
    this.name = name;
  }
  update(data){
    console.log(data);
  }
}

let koolbuddy = new YoutubeChannel("KoolBuddy", 1000); //Creating a YoutubeChannel koolbuddy(Object)
let user1 = new User("John"); //Creating an object of User class
koolbuddy.subscribe(user1); //User1 subscribes to KoolBuddy channel
