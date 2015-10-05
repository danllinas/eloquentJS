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
function findSolution(target){
  function find(start, history){
    if (start == target) {
      return history;
    } else if (start > target) {
      return null
    } else {
      return find(start + 5, "(" + history + " + 5)") ||
             find(start * 3, "(" + history + " * 3)");
    }
  }
  return find(1, "1");
}
console.log(findSolution(13));
