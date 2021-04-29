// obiekty

const person = {
  name: "Łukasz",
  surname: "Walczak",
  age: 39,
};

// console.log(person.name); // to samo: console.log(person["name"]);  name jest traktowany tutaj jak string i
// // tak wywoływany

// const prop = "name";
// console.log(person[prop]); // to sam: console.log(person['name']);

// function pobierzWartosc(osoba, klucz = "name") {
//   return osoba[klucz]; // w nawiasach[] wyciagamy dynamicznie zmienne z obiektów
// }
// console.log(pobierzWartosc(person, "age"));

// const name = person.name;
// console.log(`Cześć ${name}`);

const name = person.name; //refernecje i kopie przypomnienie
const name2 = name; // kopia bo odnosimy do stringa
const person2 = person; // referncja bo odnosimy się do obiektu
person.name = "Matt";
console.log(name, name2, person2.name, person.name);
