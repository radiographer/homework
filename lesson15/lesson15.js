const uczniowie = [
  {
    name: "Mateusz",
    grade: 1,
    attempts: 4,
  },
  {
    name: "Rafał",
    grade: 12,
    attempts: 3,
  },
  {
    name: "Janek",
    grade: 5,
    attempts: 2,
  },
  {
    name: "Kasia",
    grade: 3,
    attempts: 1,
  },
  {
    name: "Bartek",
    grade: 2,
    attempts: 2,
  },
  {
    name: "Arek",
    grade: 6,
    attempts: 3,
  },
  {
    name: "Zenek",
    grade: 4,
    attempts: 1,
  },
];

// const mateusz = uczniowie[0]
// const name = matuesz.name
// uczniowie[0].name;

// for (let i = 0; i < uczniowie.length; i++) {
//   console.log(`Cześć ${uczniowie[i].name}`);
//   if (uczniowie[i].grade > 3) {
//     console.log("Dobra robota!");
//   }
// }

// for (let i = 0; i < uczniowie.length; i++) {
//   let tekst = `Cześć ${uczniowie[i].name}`;
//   if (uczniowie[i].grade > 3) {
//     tekst += ", dobra robota!";
//   }
//   console.log(tekst);
// }
// for (let i = 0; i < uczniowie.length; i++) {
//   const uczen = uczniowie[i];
//   let tekst = `Cześć ${uczen.name}`;
//   if (uczen.grade > 3) {
//     tekst += ", dobra robota!";
//   }
//   console.log(tekst);
// }

// function sayHello(uczen) {
//   let tekst = `Cześć ${uczen.name}`;
//   if (uczen.grade > 3) {
//     tekst += ", dobra robota!";
//   }
//   console.log(tekst);
// }

// sayHello(uczniowie[0]);

//FUNKCJA W PĘTLI

// for (let i = 0; i < uczniowie.length; i++) {
//   const uczen = uczniowie[i];
//   sayHello(uczen);
//   passed(uczen);
// }

// function passed(uczen) {
//   if (uczen.grade <= 2 && uczen.attempts > 2) {
//     console.log("przykro mi nie zdales");
//   } else if (uczen.grade > 2) {
//     console.log("zdałes");
//   } else {
//     console.log("Sprobuj jeszcze raz");
//   }
// }

// function sayHello(uczen) {
//   let tekst = `Czesc ${uczen.name}`;
//   if (uczen.grade > 3) {
//     tekst += ", dobra robota!";
//   }
//   console.log(tekst);
// }

// PĘTLA W FUNKCJI
// function sayHelloToTheClass(klasa, ocena, odKtoregoIndeksu = 0) {
//   for (let i = odKtoregoIndeksu; i < klasa.length; i++) {
//     const uczen = klasa[i];
//     sayHello(uczen, ocena);
//     // passed(uczen);
//   }
// }

// function passed(uczen) {
//   if (uczen.grade <= 2 && uczen.attempts > 2) {
//     console.log("przykro mi nie zdales");
//   } else if (uczen.grade > 2) {
//     console.log("zdałes");
//   } else {
//     console.log("Sprobuj jeszcze raz");
//   }
// }

// function sayHello(uczen, ocena = 3) {
//   let tekst = `Czesc ${uczen.name}`;
//   if (uczen.grade >= ocena) {
//     tekst += ", dobra robota!";
//   }
//   console.log(tekst);
// }
// sayHelloToTheClass(uczniowie, 5, 2);

// PĘTLA W PĘTLI

// let str = "";
// for (let i = 0; i < 10; i++) {
//   str += "*"; //str = str + '*'
//   console.log(str);
// }
// wynik:
// **
// ***
// ****
// *****
// ******
// *******
// ********
// *********
// **********
//
//
//
//
//
//

// for (let i = 0; i < 10; i++) {
//   let row = "";
//   for (let k = 0; k < 10; k++) {
//     const liczba = (i + 1) * (k + 1);
//     row = `${row} ${liczba}`;
//   }
//   console.log(row);
// }
// wynik:
// 2 4 6 8 10 12 14 16 18 20
//  3 6 9 12 15 18 21 24 27 30
//  4 8 12 16 20 24 28 32 36 40
//  5 10 15 20 25 30 35 40 45 50
//  6 12 18 24 30 36 42 48 54 60
//  7 14 21 28 35 42 49 56 63 70
//  8 16 24 32 40 48 56 64 72 80
//  9 18 27 36 45 54 63 72 81 90
//  10 20 30 40 50 60 70 80 90 100
//
//
//
//
//
//
// for (let i = 0; i < 10; i++) {
//   let row = "";
//   for (let k = 0; k < 10 - i; k++) {
//     row += "*";
//   }

//   console.log(row);
// }

// wynik:
// *********
// ********
// *******
// ******
// *****
// ****
// ***
// **
// *

//
//
//
//
//
//
//pętla zwiększająca każdemu uczniowi ocenę

// const uczniowie2 = [...uczniowie] //destrukturyzacja
// for (let i = 0; i < uczniowie2.length; i++) {
//   const uczen = uczniowie2[i];
//   uczen.grade++;
// }
// console.log(uczniowie);
// console.log(uczniowie2);         niezrozumiałe dalej, nevemind

const liczby = ["Mateusz", "Marysia", "Mariola", "Marian", "Mato"];
liczby.map(function (element, index) {
  console.log("element", element);
  console.log("index", index);
});

//ekwiwalent:
// const liczby = ["Mateusz", "Marysia", "Mariola", "Marian", "Mato"];
// for (let i = 0; i < liczby.length; i++) {
//   console.log("element", liczby[i]);
//   console.log("index", i);
// }
//wynik:
// element Mateusz
// element Marysia
// index 1
// element Mariola
// index 2
// element Marian
// index 3
// element Mato
// index 4
