// 1.Pętla for...in
// a) napisz obiekt(zawierający conajmniej 3 elementy klucz-wartość)
// i pętle która wyświetli wszystkie wartości tego obiektu,

// const car = {
//   name: "Skoda",
//   year: 2013,
//   color: "grey",
// };
// for (property in car) {
//   console.log(property);
// }

// b) napisz tablice(conajmniej 5 elementową) i wyświetl wszystkie elementy tej tablicy,
// const car = ["skoda", "grey", 2013, { owner: "Łukasz" }, [1, 2, 3]];

// for (property in car) {
//   console.log(car[property]);
// }

// 2. Pętla for...of
// a) Napisz pętle która wyświetli elementy tablicy tej samej co w zadaniu 1b,

// const car = ["skoda", "grey", 2013, { owner: "Łukasz" }, [1, 2, 3]];

// for (property of car) {
//   console.log(property);
// }
// b) Napisz pętle która wyświetli elementy stringa "Hello World",

// const str = "Hello World";

// for (property of str) {
//   console.log(property);
// }
// c) Jaka jest różnica między for..in a for..of?

// for in ---> na obiektach
// for of ---> na tablicach i stringach

// 3. Pętla while oraz do...while
// a) napisz pętlę, która wyświetli liczby od -5 do 5
// let x = -5;
// while (x <= 5) {
//   console.log(x);
//   x++;
// }

// b) napisz taka samą pętle za pomocą do...while

// let x = -5;
// do {
//   console.log(x);
//   x++;
// } while (x <= 5);

// 4. metoda map() - const array = [1, 2, 3, 4, 5] przykładowa tablica
// a) stwórz nową tablicę z taką samą liczbą elementów gdzie każdy jest pomnożony razy 2,
// const array = [1, 2, 3, 4, 5];

// const newArray = array.map(function (item) {
//   return item * 2;
// });
// console.log("nowa tablica", newArray);

// b) stwórz tablicę z imionami i nową tablice, która wyświetli powitanie dla każdego
// imienia w tablicy,
// const array = ["Ania", "Łukasz", "Rita", "Tomek"];

// const newArray = array.map(function (item) {
//   return "Cześć " + item;
// });
// console.log("nowa tablica", newArray);

// 5. metoda filter() - przykładowa tablica const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// a) z tablicy array stwórz nową tablicę w której będą
// tylko liczby nieparzyste,
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = array.filter(function (item) {
//   return item % 2 !== 0;
// });
// console.log(newArray);

// b) z tablicy array stwórz nową tablicę z cyframi większymi od 5ciu,
// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newArray = array.filter(function (item) {
//   return item > 5;
// });
// console.log(newArray);
// c) stwórz tablicę z obiektami(z wartościami: name, lastname, gender - przynajmniej
// 4 osoby w tablicy powinny być) i przefiltruj ją tak aby zostały tylko osoby płci
// żeńskiej w nowej tablicy,

// const array = [
//   { name: "Tomek", lastname: "Krasiewicz", gender: "male" },
//   { name: "Janke", lastname: "Walczak", gender: "male" },
//   { name: "Zuzia", lastname: "Krasiewicz", gender: "female" },
//   { name: "Janka", lastname: "Nowak", gender: "female" },
// ];
// const newArray = array.filter(function (women) {
//   return women.gender === "female";
// });
// console.log(newArray);

// 6. metoda forEach()
// a) zmień tablice const array = [1, 2, 3, 4, 5, 6, 7, 8, 9] tak aby każda wartość została
// pomniejszona o 1,

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newArray = [];

// array.forEach(function (element) {
//   newArray.push(element - 1);
// });
// console.log(newArray);

// 7. metoda sort()
// a) posortuj alfabetycznie tablicę ze stringami const str = ['d', 'a', 's', 'f']
// const str = ["d", "a", "s", "f"];

// console.log(str.sort());

// b) posortuj od liczby najmniejszej do największej tablicę
// const array = [9, 2, 1, 6, 5, 4, 7, 8, 3]
// const array = [9, 2, 1, 6, 5, 4, 7, 8, 3];

// const newArray = array.sort(function (first, second) {
//   return first - second;
// });
// console.log(newArray);

// c) powyższą tablicę array posortuj od największej do najmniejszej,
// const array = [9, 2, 1, 6, 5, 4, 7, 8, 3];

// const newArray = array.sort(function (first, second) {
//   return second - first;
// });
// console.log(newArray);

// 8**. łączenie metod map(), filter(), sort() - const array = [9, 2, 1, 6, 5, 4, 7, 8, 3]
// a) stwórz nową tablicę od array tylko każdy element powinien być powiększony o 2, a
// następnie przefiltruj tą tablicę tak aby wyświetliła tylko liczby większe od 10 i
// posortuj tą tablicę od najmniejszej liczby do największej,

// const array = [9, 2, 1, 6, 5, 4, 7, 8, 3];

// const newArray = array
//   .map(function (item) {
//     return item + 2;
//   })

//   .sort(function (first, second) {
//     return first - second;
//   })
//   .filter(function (item) {
//     return item > 10;
//   });
// console.log(newArray);
