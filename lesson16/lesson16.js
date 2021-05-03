// const numbers = [1, 5, 8, 10, 12, 3, 2];

const samochod = {
  marka: "lambo",
  model: "urus",
  kolor: "fioletowy",
  km: "640",
};

const samochod2 = {
  marka: "ford",
  model: "mustag",
  kolor: "czerwony",
  km: "421",
};

const samochody = [samochod, samochod2];

// for (let i = 0; i < samochody.length; i++) {
//   const samochod = samochody[i];
//   for (let key in samochod) {
//     console.log(`${key}: ${samochod[key]}`);
//   }
//   console.log("\n");
// }

// for (klucz in numbers) {
//   console.log("klucz", klucz);
//   console.log(numbers[klucz]);
// }

// let i = 0;

// while ( i < numbers.length) {
//   console.log(numbers[i]);
//   i++;
// }

const numbers = [1, 5, 8, 110, 20];

function funkcjaMapujaca(element) {
  return element * 2;
}

const numbersDoubled = numbers.map(funkcjaMapujaca);
console.log("numbers", numbers);
console.log("numbersDoubled", numbersDoubled);
