// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Reduce

//  Używając reduce:

// 1. zwróć sumę wszystkich elementów znajdujących się w tablicy,

// const result = array.reduce(function (acc, next) {
//   const sum = acc + next;
//   return sum;
// }, 0);
// console.log(result);

// 2. zwróć sumę wszystkich parzystych elementów tablicy,

// const newArrayEvenNumbers = array
//   .filter(function (item) {
//     return item % 2 === 0;
//   })
//   .reduce(function (acc, next) {
//     const sum = acc + next;
//     return sum;
//   }, 0);
// console.log(newArrayEvenNumbers);

// 3. zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue)

// const result = array.reduce(function (acc, next) {
//   const sum = acc + next;
//   return sum;
// }, 10);
// console.log(result);

// 4. Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue,

// accumulator bez initialValue będzie pierwszym elementem tablicy, a gdy podamy initialValue accumulator będzie
// wartością z initialValue plus wartością z kolejnej iteracji

// 5. Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ?

// 6. Napisz pętle for która będzie miała takie samo działanie jak pętla reduce

// function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
//   let wartosc = wartoscPoczatkowa;
//   for (i = 0; i < array.length; i++) {
//     const item = array[i];

//     wartosc = funkcjaRedukujaca(wartosc, item);
//   }
//   return wartosc;
// }

// const result = reduce(function (acc, next) {
//   return acc + next;
// }, 0);

// console.log(result);

// Some i every:
// const someArray = [11, 3, 5, 31, 31, 54, 23, 14];

// 7. zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50,

// const result = someArray.some(function (item) {
//   return item > 50;
// });
// console.log(result);

// 8. zwróć true jeśli w tablicy każdy element jest większy od 2,

// const result = someArray.every(function (item) {
//   return item > 2;
// });
// console.log(result);

// 9. Jaka jest różnica między some i every?

// metoda some sprawdza czy w tablicy znajduje się przynajmniej jeden jakiś element, który spełnia warunek,
// a metoda some, czy wszystkie elementy w tablicy spełniaja dany warunek

// 10. sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
// w tablicy znajduje się element podzielny przez 7,

// const result = someArray.some(function (item) {
//   string = "";
//   if (item % 7 === 0) {
//     string = "w tablicy znajduje się element podzielny przez 7";
//     return string;
//   }
// });
// console.log(string);

// 11. stwórz metodę some za pomocą pętli for,
// zwróć true jeśli tablica zawiera chociaż jeden element większy niż 10,

// const someArray = [3, 11, 3, 5, 31, 31, 54, 23, 14];

// every = function (arr) {
//   result = false;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] > 10) {
//       result = true;
//     }
//   }
//   return result;
// };

// console.log(every(someArray));

//
//
// LUB:
// let result = false;

// for (let i = 0; i < someArray.length; i++) {
//   if (someArray[i] > 10) {
//     result = true;
//     break;
//   }
// }

// console.log(result);

// 12. stwórz metodę every za pomocą pętli for,
// zwróć true jeśli w tablicy każdy element jest większy od 2

// const someArray = [3, 11, 3, 5, 31, 31, 54, 23, 14];

// every = function (arr) {
//   result = true;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 2) {
//       result = false;
//     }
//   }
//   return result;
// };

// console.log(every(someArray));

//
// LUB:
//
// let result = true;
// for (let i = 0; i < someArray.length; i++) {
//   if (someArray[i] < 2) {
//     result = false;
//     break;
//   }
// }
// console.log(result);
//
//
// Funkcje i metody reduce, some i every
//
// 13. Stwórz funkcję, która:

// przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof),

// function numberSum() {
//   firstArray = ["kot", 10, true, 5, false, "mama", {}, 15];

//   secondArray = [];

//   for (i = 0; i < firstArray.length; i++) {
//     if (typeof firstArray[i] === "number") {
//       secondArray.push(firstArray[i]);
//     }
//   }
//   const result = secondArray.reduce(function (acc, next) {
//     const sum = acc + next;
//     return sum;
//   }, 0);
//   console.log(result);
// }
// numberSum();
//
//
//
// 14. przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
// tablicy od następnego,

function numSub(arr, initialValue) {}
