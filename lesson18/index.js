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

function reduce(funkcjaRedukujaca, wartoscPoczatkowa) {
  let wartosc = wartoscPoczatkowa;
  for (i = 0; i < listaAllegro.length; i++) {
    const item = listaAllegro[i];

    wartosc = funkcjaRedukujaca(wartosc, item);
  }
  return wartosc;
}

const result = reduce(function (acc, { soldProducts }) {
  return acc + soldProducts;
}, 0);

console.log(result);

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
