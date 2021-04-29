const druzynaPierscienia = ["Łukasz", "Rafał", "Adam", "Zbyszek"];
// console.log(`Cześć ${druzynaPierscienia[0]}`);
// console.log(`Cześć ${druzynaPierscienia[1]}`);
// console.log(`Cześć ${druzynaPierscienia[2]}`);
// console.log(`Cześć ${druzynaPierscienia[3]}`);

for (let i = 0; i < 4; i++) {
  console.log(`Cześć ${druzynaPierscienia[i]}`);
}

for (let i = 0; i < druzynaPierscienia.length; i++) {
  console.log(`Cześć ${druzynaPierscienia[i]}`);
} //gdy chcemy iterowac do końca tabicy

druzynaPierscienia.map(function (element) {
  console.log(`Cześć ${element}`);
}); //inna metoda na pętle, dodatkowe funkcje na tablicach, któe powodują, że mamy dostęp do każdego
// elementu na tablicy
