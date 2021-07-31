// const divImie = document.getElementById("imie");

// function pobierzImie() {
//   divImie.innerHTML = "Loading...";
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Mateusz"), 3000);
//   });
// }
// const promise = pobierzImie();

// promise.then((response) => {
//   divImie.innerHTML = `Cześć ${response} !`;
// });

// wywołują się po kolei, każde po 5 sek.!!!

// async function main() {
//   function pobierzImie(index) {
//     const imiona = ["Łukasz", "Michał", "Ania", "Zosia", "Ami"];

//     return new Promise((resolve) => {
//       setTimeout(() => resolve(imiona[index]), 3000);
//     });
//   }
//   const imie1 = await pobierzImie(2);
//   console.log("imie1", imie1);

//   const imie2 = await pobierzImie(0);
//   console.log("imie1", imie2);

//   const imie3 = await pobierzImie(4);
//   console.log("imie1", imie3);
// }

// main();

// wywołują się jednocześnie (po 3 sek, jak do damy do któregoś wywyałoania większy czas to reszta czeka na ten najdłuższy)!!!
//

// async function main() {
//   function pobierzImie(index, czas = 3000) {
//     const imiona = ["Łukasz", "Michał", "Ania", "Zosia", "Ami"];

//     return new Promise((resolve) => {
//       setTimeout(() => resolve(imiona[index]), czas);
//     });
//   }

//   Promise.all([pobierzImie(2), pobierzImie(0), pobierzImie(4)]).then(
//     (response) => console.log(response)
//   );

//   // const imie1 = await pobierzImie(2);
//   // console.log("imie1", imie1);

//   // const imie2 = await pobierzImie(0);
//   // console.log("imie1", imie2);

//   // const imie3 = await pobierzImie(4);
//   // console.log("imie1", imie3);
// }

// main();
//
//
//
//

// wywoła się jedna(4) po 5 sek.
//

// async function main() {
//   function pobierzImie(index, czas = 3000) {
//     const imiona = ["Łukasz", "Michał", "Ania", "Zosia", "Ami"];

//     return new Promise((resolve) => {
//       setTimeout(() => resolve(imiona[index]), czas);
//     });
//   }

//   const promise1 = pobierzImie(2);
//   promise1.then((response) => console.log(response));

//   const promise2 = pobierzImie(4, 5000);
//   promise2.then((response) => console.log(response));

//   const promise3 = pobierzImie(0);
//   promise3.then((response) => console.log(response));
// }

// main();

// metoda async await przydatna gdy potrzebujemy wyswieltlic kolejne dane, a każda nastepna jest zalezna od uzyskanej poprzedniej,
// a  moteda promise then przydatna gdy chcemy niezaleznie, od razu wyswietlic dane
//Promise all zbiera nam resolve do tablicy
