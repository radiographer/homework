// function obliczCene(obj) {
//   return `${produkt.name} kosztuje ${produkt.price}`;
// }

// const produkt = {
//   name: "Ksiazka JS",

//   type: "ksiazka",

//   price: 100,
// };

// const totalPrice = obliczCene(produkt);
// console.log(totalPrice);

// function obliczCene(name, type, price) {
//   return `${name} kosztuje ${price}`;
// }

// const produkt = {
//   name: "Ksiazka JS",

//   type: "ksiazka",

//   price: 100,
// };

// const totalPrice = obliczCene(produkt.name, produkt.type, produkt.price);
// console.log(totalPrice);

function licznik() {
  const stan = {
    ile: 0,
  };
  function zwieksz() {
    stan.ile = stan.ile + 1;
  }
  function pokazLicznik() {
    console.log(stan.ile);
  }
  return {
    ile: stan.ile,
    zwieksz,
    pokazLicznik,
  };
// }
const counter = licznik();

console.log(counter);

counter.zwieksz();

// → zwraca nam obiekt ten który jest po słowie return
// czyli {
//   ile: 0,
//   zwieksz: [Function: zwieksz],
//   pokazLicznik: [Function: pokazLicznik]

