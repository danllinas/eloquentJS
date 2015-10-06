// // function landscape() {
// //   var result = "";
// //   function flat(size){
// //     for(var count = 0; count < size; count++){
// //       result += "_";
// //     }
// //   };
// //   function mountain(size){
// //     result += "/";
// //     for(var count = 0; count < size; count++){
// //       result += "'"
// //     };
// //     result += "\\";
// //   };
// //
// //   flat(2);
// //   mountain(1);
// //   mountain(1);
// //   mountain(2);
// //   flat(1);
// //   return result;
// // };
// //
// // console.log(landscape());
//
// console.log("The future says:", future());
//
// function future(){  //declared functions are moved t the top of the scope...you can define them below and call them from above.
//
//   return "We STILL have no flying cars.";
// }
//


// function greet(who){
//   console.log("Hello " + who);
// }
// greet("Harry");
// console.log("Bye");


// function chicken(){
//   return egg();
// }
// function egg(){
//   return chicken();
// }
//
// console.log(chicken() + " came first.");

// function power(base, exponent){
//   if (exponent == undefined) {
//     exponent = 2;
//   }
//   var result = 1;
//   for (var count = 0; count < exponent; count++) {
//     result *= base
//   }
//   return result;
// }
//
// console.log(power(4));
//
// console.log("R", 2, 'D', 2)

// function wrapValue(n){
//   var localVariable = n;
//   return function(){
//     return localVariable;
//   };
// }
//
// var wrap1 = wrapValue(1);
// var wrap2 = wrapValue(2);
//
// console.log(wrap1());
// console.log(wrap2());

// function multiplier(factor){
//   return function(number){
//     return number * factor
//   };
// }
// var twice = multiplier(2)
// console.log(twice(5));

// function power(base, exponent) {
//   if (exponent == 0){
//     console.log(base, exponent, "this is in the if");
//     return 1
//   }
//   else {
//     console.log(base, exponent, "this is in the else");
//     return base * power(base, exponent-1)
//   }
// }
// console.log(power(2, 10))
// function findSolution(target){
//   function find(start, history){
//     if (start == target) {
//       return history;
//     } else if (start > target) {
//       return null
//     } else {
//       return find(start + 5, "(" + history + " + 5)") ||
//              find(start * 3, "(" + history + " * 3)");
//     }
//   }
//   return find(1, "1");
// }
// console.log(findSolution(13));
//
// function printFarmInventory(cows, chickens, pigs) {
//   console.log(zeroPad(cows, 3) + " Cows");
//   console.log(zeroPad(chickens, 3) + " Chickens");
//   console.log(zeroPad(pigs, 3) + " Pigs");
// }
//
// function zeroPad(number, width) {
//   var string = String(number);
//   while (string.length < width) {
//     string = "0" + string;
//   }
//   return string;
// }
//
// printFarmInventory(100, 55, 7);
//

// function minimum(num1, num2) {
//   if (num1 < num2) {
//     return num1;
//   } else if (num1 == num2) {
//     return "They're even!";
//   } else {
//     return num2;
//   }
// }
//
// console.log(minimum(255, 25));

// function isEven(number){
//   if (number < 0) {
//     number = number * -1
//   }
//   if (number == 0) {
//     return true;
//   } else if (number == 1) {
//     return false;
//   } else {
//     return isEven(number - 2);
//   }
// }
//
// console.log(isEven(-30));
///////////////////
/////Bean Counting
//////////////////
// function countChar (string, letter){
//   var count = 0;
//   for (var x = 0; x < string.length; x++) {
//     if (string.charAt(x) == letter) {
//       count += 1;
//     }
//   }
//   return count;
// }
//
// console.log(countChar("kkakarkmaka", "k"));
// var mack = [];
// mack.push("Mack");
// mack.push("the", "knife");
// console.log(mack.pop());
// console.log(mack);
// var day1 = {
//   squirrel: false,
//   events: ["work", "touched tree", "pizza", "running", "television"],
//   'touched tree': "Touched"
// };
// console.log(day1.events);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);
// console.log(day1);
// var anObject = {left: 1, right: 2}
// console.log(anObject.left);
// delete anObject.left;
// console.log("right" in anObject);
// console.log(typeof [1,2]);
// var journal = [
//   {
//     events: ['work', 'touched tree', 'pizza', 'running', 'television'],
//     squirrel: false
//   },
//   {
//     events: ['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'],
//     squirrel: false
//   },
//   {
//     events: ['weekend', 'cycling', 'break', 'peanuts', 'beer'],
//     squirrel: true
//   }
// ]
// console.log(journal[1].squirrel);
// var object1 = {value: 10};
// var object2 = object1
// console.log(object1 == object2);
// object1.value = 15;
// console.log(object2.value);
// var journal = [];
//
// function addEntry(dayEvents, squirrelTurn) {
//   journal.push({events: dayEvents, squirrel: squirrelTurn});
// }
//
// addEntry(['work', 'touched tree', 'pizza', 'running', 'television'], false);
// addEntry(['work', 'ice cream', 'cauliflower', 'lasagna', 'touched tree', 'brushed teeth'], false);
// addEntry(['weekend', 'cycling', 'break', 'peanuts', 'beer'], true);
//
// console.log(journal);
// function phi(table) {
//   return (table[3] * table[0] - table[2] * table[1])/
//             Math.sqrt((table[2] + table[3]) *
//                       (table[0] + table[1]) *
//                       (table[1] + table[3]) *
//                       (table[0] + table[2]));
// }
//
// console.log(phi([76, 9, 4, 1]))
