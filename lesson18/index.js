const { listaAllegro, students, rentalCarCompany } = require("./data");

// const laptopy = [];
// for (let i = 0; i < listaAllegro.length; i++) {
//   const product = listaAllegro[i];
//   if (product.category === "laptopy") {
//     laptopy.push(product);
//   }
// }

// REDUCE

// const result = listaAllegro.reduce(function (prev, next) {
//   const sum = prev + next.soldProducts;
//   return sum;
// }, 0);

// console.log(result);
//
//
// const result = listaAllegro.reduce(function (acc, { price, soldProducts }) {
//   const sum = acc + price * soldProducts;
//   return sum;
// }, 0);

// console.log(result);
//
//lub bez przypisywania do zmiennej od razu w return
//
// const result = listaAllegro.reduce(function (acc, { price, soldProducts }) {
//   return acc + price * soldProducts;
// }, 0);

// console.log(result);
//
//zaimplementowanie
// REDUCE ---> FOR      !!!!!!!!!!!!!!!!
//
// z wartością początkową (live od 1hh02min) patrz: 1hh:07min!

// function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
//   let wartosc = wartoscPoczatkowa;
//   for (i = 0; i < listaAllegro.length; i++) {
//     const item = listaAllegro[i];

//     wartosc = funkcjaRedukujaca(wartosc, item);
//   }
//   return wartosc;
// }

// const result = reduce(function (acc, { soldProducts }) {
//   return acc + soldProducts;
// }, 0);

// console.log(result);

//
// bez wartości początkowej (live od 1hh11min)

// function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
//   let wartosc;
//   let index;
//   if (wartoscPoczatkowa === undefined) {
//     index = 1;

//     wartosc = listaAllegro[0];
//   } else {
//     index = 0;
//     wartosc = wartoscPoczatkowa;
//   }

//   for (i = index; i < listaAllegro.length; i++) {
//     const item = listaAllegro[i];

//     wartosc = funkcjaRedukujaca(wartosc, item);
//   }
//   return wartosc;
// }

// const result = reduce(function (acc, { soldProducts }) {
//   return acc + soldProducts;
// }, 0);

// console.log(result);
//
//
//
//
// function discount10(item, index, tablica) {
//   return {
//     ...item,
//     price: item.price * 0.9,
//   };
// }

// const produktyZeZnizka10 = listaAllegro
//   .filter(function (item) {
//     return item.category === "laptopy";
//   })
//   .map(discount10)
//   .map(function ({ name, price }) {
//     return {
//       name,
//       price,
//     };
//   })
//   .filter(function (item) {
//     return item.price < 2000;
//   });
// console.log(produktyZeZnizka10);

// function discount10(item, index, tablica) {
//   return {
//     ...item,
//     price: item.price * 0.9,
//   };
// }

// const utarg = listaAllegro

//   .map(discount10)
//   .map(function ({ name, price, soldProducts }) {
//     return {
//       name,
//       price,
//       soldProducts,
//     };
//   })
//   .filter(function (item) {
//     return item.price > 500;
//   })
//   .reduce(function (sum, item) {
//     return sum + item.price * item.soldProducts;
//   }, 0);
// console.log(utarg);

// LESSON19 !!!

// const grades = students.reduce(
//   function (grades, student) {
//     student.grades.forEach(function ({ rate }) {
//       const key = `rate${rate}`;
//       grades[key]++;
//     });

//     return grades;
//   },
//   {
//     rate1: 0,
//     rate2: 0,
//     rate3: 0,
//     rate4: 0,
//     rate5: 0,
//     rate6: 0,
//   }
// );

// console.log(grades);

// od 23:32
// const grades = students.reduce(function (grades, student) {
//   student.grades.forEach(function ({ rate }) {
//     const key = `rate${rate}`;
//     if (grades[key] !== undefined) {
//       grades[key]++;
//     } else {
//       grades[key] = 1;
//     }
//   });

//   return grades;
// }, {});

// console.log(grades);
//
//
// THIS !!!

// const a = {
//   val: 10,
//   pokazValue: function () {
//     console.log(this.val);
//   },
// };
// a.pokazValue();
//
//implementacja REDUCE!!!!!!
//
//
// function naszReduce(funkcjaRedukujaca, initialValue) {
//   let index;
//   let wartosc;
//   if (initialValue !== undefined) {
//     wartosc = initialValue;
//     index = 0;
//   } else {
//     wartosc = this[0];
//     index = 1;
//   }
//   for (let i = index; i <= this.length; i++) {
//     const element = this[i];
//     wartosc = funkcjaRedukujaca(wartosc, element);
//   }

//   return wartosc;
// }
// Array.prototype.naszReduce = naszReduce;

// const arr = [1, 2, 3, 6, 7];

// arr.naszReduce(function (sum, next) {
//   return sum + next;
// }, 0);
// const suma = arr.reduce(function (sum, next) {
//   return sum + next;
// }, 0);
// console.log(suma);
//
//
//
//metoda 1.)
// function Student(name, age) {
//   return {
//     name,
//     age,
//   };
// }

// const studenA = Student("Bart", 18);
// console.log(studenA);

//

// słówko New powoduje ze ta funkcja z New
// dostalismy obiekt z nazwą, powstaje nowy typ danych i do
// tego służy nam konstruktor
//wywoławnie funkcji ze słowem new i duza litera w nazwie
//funkcji (dzieki temu wiemy ze to jest funkcja konstruktor i
// ze uzywamy słówka New)
// słówko New daje nam dostęp do this, słówko new powoduje
// ze funkcja wywołana z tym słówkiem automatycznie zwraca this, nie musimy robic return
//jedyny przyklad ze funkcja cos zwraca bez return, dzieki New
//this staje sie obiektem ktory zostaje zwrocony przez funkcje
//
//
//
//  metoda2.)
//
// function Student(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Student.prototype.sayHello = function () {
//   console.log(`Hello ${this.name}`);
// };

// const studentA = new Student("Bart", 18);
// studentA.sayHello();

// const studentB = new Student("Karl", 65);
// studentB.sayHello();

// console.log(studenA);
