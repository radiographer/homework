// function obliczCene(name, price, vat) {
//   const totalPrice = price + (price * vat) / 100;
//   return `Cena produktu ${name} to ${totalPrice} PLN.`;
// }
// const wynik1 = obliczCene('"Książka Js"', 100, 23);
// const wynik2 = obliczCene('"Książka React"', 200, 23);
// const wynik3 = obliczCene('"Książka HTML"', 110, 20);
// const wynik4 = obliczCene('"Książka PHP"', 140, 19);
// console.log(wynik1);
// console.log(wynik2);
// console.log(wynik3);
// console.log(wynik4);
//Cena produktu Książka JS to 123 PLN

// function obliczCene(obj) {
//   const stawkiVAT = {
//     książka: 8,
//     szkolenie: 23,
//     hotel: 13,
//   };

//   const stawkaVAT = stawkiVAT[obj.type];
//   const totalPrice = obj.price + (obj.price * stawkaVAT) / 100;
//   return `Cena produktu ${obj.type} o nazwie ${obj.name} to ${totalPrice} PLN.`;
// }
// const produkt = {
//   name: "Książka JS",
//   type: "książka",
//   price: 100,
// };

// obliczCene(produkt);
// console.log(obliczCene(produkt));

// let type;
// if (objtype) {
//   type = obj.type;
// } else {
//   type = "książka";
// } ustawianie na sztywno typu, jeżli go nie ma w obiekcie, czyli jezeli go nie ma to ma ustawić na książką,
// ktory wiciągnie odpowiedni vat z innego objektu
// lepsze zapisy, tego samego:
// const type = obj.type ? obj.type : 'książka'
// lub operatorem logicznym:
// const type = obj.type || 'książka'

// function obliczCene({ name, type /*= "książka"*/, price }) {
//   //destrukturyzacja
//   const stawkiVAT = {
//     książka: 8,
//     szkolenie: 23,
//     hotel: 13,
//   };

//   const stawkaVAT = stawkiVAT[type];
//   const totalPrice = price + (price * stawkaVAT) / 100;
//   return `Cena produktu ${type} o nazwie ${name} to ${totalPrice} PLN.`;
// }
// const produkt = {
//   name: "Książka JS",
//   type: "książka",
//   price: 100,
// };

// obliczCene(produkt);
// console.log(obliczCene(produkt));

//FUNKCJA w FUNKCJI
