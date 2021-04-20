// 1. Napisz funkcje (typy proste):
//    a) zwracającą sumę trzech liczb podanych w parametrach funkcji,

function sum(a, b, c) {
  return a + b + c;
}

// .np.:
const add = sum(1, 2, 3);
console.log(add);

// b) zwracającą pole trójkąta ze wzoru podstawa * wysokość / 2, która zwróci
// 'Pole trójkąta to x(zmienna tu powinna być), czyli ma on x długości podstawy i x
// wysokości'

const areaTriangle = function (base, height) {
  const area = (base * height) / 2;
  return `Pole trójkąta to ${area}, czyli ma on ${base} długości podstawy i ${height}
      wysokości.`;
};

// .np.:
const area = areaTriangle(5, 4);
console.log(area);

// c) zwracającą ile aktualnie ktoś ma lat prawo jazdy na podstawie dwóch argumentów,
// wieku danej osoby i wieku w którym to prawo jazdy zdał,

function licenseHowLong(personAge, licensePersonAge) {
  return personAge - licensePersonAge;
}

// .np.:
const result = licenseHowLong(39, 20);
console.log(result);

// d) zwracającą ile spalimy litrów paliwa jeśli jako jeden parametr podamy spalanie
// na 100km, a jako drugi przejechaną trasę,

function fuelUsageCalc(fuelEfficiency, tripDistance) {
  return (fuelEfficiency * tripDistance) / 100;
}

// .np.:
const result = fuelUsageCalc(7, 100);
console.log(result);

// e) zwracającą stringa 'Ala ma 23 lata i 2 dzieci', gdzie imię, wiek i ilość dzieci
//  podajemy w parametrach funkcji,

const ageAndFamilly = function (name, age, children) {
  return `${name} ma ${age} lata i  ${children} dzieci.`;
};
const info = ageAndFamilly("Ala", 23, 2);
console.log(info);

// 2. Napisz funkcje (typy złożone):
//    a) zwracającą przekazaną do parametru tablicę,

function array(a) {
  return a;
}
// .np.:
console.log(array(["gg"]));

// b) zwracającą drugą wartość przekazanej do funkcji tablicy 3 elementowej,

function getSecondElementFromArray(a) {
  return a[1];
}

// .np.:
console.log());
// lub
var wynik = getSecondElementFromArray(["abc", "cde", "fgh"]);
console.log(wynik);

// c) zwracającą stringa 'Przekazana tablica ma x elementów, a elementem nr 3 jest x'

function getArrayDesc(array) {
  const arrayLength = array.length;
  const value = array[2];
  return `Przekazana tablica ma ${arrayLength} elementów, a elementem nr 3 jest ${value}.`;
}
// .np.:
console.log(getArrayDesc([1, 2, 3, 4]));


// d) dodaje elementy do stworzonej na zewnątrz funkcji pustej tablicy i zwraca już
// zmienioną tablice z dodatkowym elementem,


emptyArray = [];

function addElement() {
  emptyArray.push("last");

  return emptyArray;
}

const result = addElement();

console.log(result);

// e) zwracającą imię osoby przekazanej w obiekcie(powinien zawierać imię, nazwisko i wiek)
// do funkcji,

function firstName() {
  person = { name: "Lukas", surname: "Walczak", age: "39" };
  return person.name;
}
console.log(firstName());

// lub

var name2 = function () {
  person = { name: "Lukas", surname: "Walczak", age: "39" };
  return person.name;
};
console.log(name2());


// f) zwracającą stringa 'imię(tu zmienna) i nazwisko(tu zmienna) ma x(tu zmienna) lat
// i x(tu zmienna) cm wzrostu'


person = { name: "Lukas", surname: "Walczak", age: "39", heigh: 173 };
// var name2 = function () {

//   return person.name;
// };
// console.log(name2());

function getString() {
  return `${person.name} ${person.surname} ma lat ${person.age} i ${person.heigh} cm wzrostu.`;
}

console.log(getString());

// g) przyjmującą dwa parametry gdzie jeden to obiekt, a drugi to wiek. Funkcja powinna zwracać 
// wiek z obiektu ale zmieniony na ten z naszego drugiego parametru,

function getAge (object, newAge){

newObject={}
newObject=object
newObject.age=newAge

  return newObject.age
}

function getAge2 (object,newAge){
  object.age = newAge;
  return object.age;
}

console.log(getAge({age:33}, 10))


// 3. Napisz funkcje (warunki if, else - typy proste):

//    a) która przyjmuje wiek osoby i informacje czy ma prawo jazdy, jeśli dana osoba
//      ma poniżej 18 lat to powinno wyświetlić, że 'Nie ma prawa jazdy'. Jak ma powyżej
//      18stu lat i nie ma prawka to też ma wyświetlić, ze 'Nie ma prawa jazdy'. A jak
//      ma powyżej 18stu lat i prawo jazdy to niech wyświetli, że "Możesz śmiało jeździć"

function drivingPermission(age, passedLicense) {
  if (age > 18 && passedLicense) {
    return "Możesz śmiało jeździć";
  } else {
    return "Nie ma prawa jazdy";
  }
}

// np.:
console.log(drivingPermission(21, false));

// b) przyjmuje jako parametr string, jeśli string jest równy 'Kup', niech wyświetli
// 'Widzę, że zrobić zakupy', a jak string jest równy 'Sprzedaj' niech wyświetli
// 'Możesz tutaj swobodnie sprzedawać', a jeśli nie będzie ani tym ani tym to niech
// pokaże 'Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj'

function shopping(check) {
  if (check === "Kup") {
    return "Widzę, że zrobisz zakupy";
  } else if (check === "Sprzedaj") {
    return "Możesz tutaj swobodnie sprzedawać";
  } else {
    return "Nie wybrałeś żadnej z dostępnych opcji - wpisz Kup lub Sprzedaj";
  }
}
// np.:
console.log(shopping("Inne"));


// c) przyjmuje liczbę jak argument i zwraca string z informacja 'Liczba jest dodatnia',
// 'Liczba jest ujemna' lub 'Liczba jest równa 0'

function checkNumber(putInteger) {
  if (putInteger > 0) {
    return "Liczba jest dodatnia.";
  }
  if (putInteger < 0) {
    return "Liczba jest ujemna.";
  } else {
    return "Liczba jest równa 0.";
  }
}
// np.:
console.log(checkNumber(0));



// d) przyjmującą liczbę jako argument i jeśli liczba jest podzielna przez 3 to niech
// pokaże 'Fizz', jak podzielna jest przez 5 to 'Buzz', a jak przez 3 i 5 to 'FizzBuzz',

function divThreeAndFive(num) {
  if (num % 3 == 0 && num % 5 == 0) {
    return "FizzBuzz";
  } else if (num % 3 == 0) {
    return "Fizz";
  } else if (num % 5 == 0) {
    return "Buzz";
  }
}

// np.:
console.log(divThreeAndFive(15));

// e) napisz funkcję, która wyświetla czy osoba może obejrzeć film dla osób 15+, funkcja
// powinna przyjąć dwa argumenty, wiek danej osoby i to czy ma zgodę rodziców, jeśli
// ma powyżej 15 lat to może oglądać, jak ma poniżej ale ma zgodę rodziców też może
// oglądać, a jak ma poniżej i nie ma zgody to nie może, wyświetli odpowiednie komunikaty,

function moviePermission(age, parentalConsent) {
  if (age > 15 && parentalConsent) {
    return "Możesz oglądać film.";
  }
  if (age < 15 && parentalConsent) {
    return "Możesz oglądać film.";
  } else age < 15 && parentalConsent;
  return "Nie możesz oglądać filmu.";
}

// np.: 
console.log(moviePermission(14, false));

// W tych funkcjach napisz warunki używając ternary operatora!!
// f) zwracającą 'Tak' jeśli jak argument podamy true i 'Nie' jeśli podamy false,

function agreement(boolean) {
  return boolean ? "Tak" : "Nie";
}

// np.:
console.log(agreement(true));

// g) zwracającą informację czy podana jako argument liczba jest parzysta czy nie,

function evenNumber(num) {
  return num % 2 == 0 ? "Parszysta" : "Nieparzysta";
}

// np.:
console.log(evenNumber(3));


// 4. Napisz funkcje (warunki if, else - typy złożone):

//    a) która przyjmuje obiekt car(model, marka, rok produkcji, isCabrio) i jeśli rok
//      produkcji jest większy niż aktualny rok to informacja, ze auta jeszcze nie wyprodukowano,
//      jak będzie rok poniżej aktualnego to wyświetlamy w zdaniu ładnie informacje o
//      aucie + informacje czy jest Cabrio czy nie jest,
function currantOrder(car) {
  if (car.year > 2021) {
    return `Auta (${car.isCabrio ? "Cabrio" : ""}) jeszcze nie wyprodukowano`;
  } else {
    return `Wyprodukowano auto (${car.isCabrio ? "Cabrio" : ""}) o marce ${
      car.brand
    }, model ${car.model} wyprodukowane w roku ${car.year}.`;
  }
}
console.log(
  currantOrder({
    model: "Octavia",
    brand: "Skoda",
    year: 2019,
    isCabrio: true,
  })
);

// b) która przyjmuje tablicę jako parametr z dowolna liczbą elementów, jeśli tablica
// jest pusta to zwracamy string pusta tablica, a jak nie to mamy zwrócić stringa
// 'tablica ma x elementów',

function arrayElements(array) {
  if (array.length == 0) {
    return "Pusta tablica.";
  } else {
    return `Tablica ma ${array.length} elementów.`;
  }
}
console.log(arrayElements([]));


// c) przyjmuje dwa parametry, oba sa obiektami, jeden to osoba (imię, nazwisko, wiek, czyLubieCzytaćKsiazki, maTV)
// a drugi to książka (tytuł, rodzaj, ilość stron) i funkcja ta powinna zwrócić stringa
// odpowiednio, jeśli osoba lubi czytać książkę to niech jej zaproponuje książkę z
// obiektu: 'Cześć x(imie), polecam Ci przeczytać x(nazwa książki) książkę, ma tylko
// (strony książki) stron', a jeśli nie lubi czytać, ale ma tv to niech zwróci
// żeby 'Poszedł oglądać tv' lub po prostu jak nie ma 'Nie wiem co Ci zaproponować'

function freeTime(person, book) {
  if (person.likesBooks) {
    return `Cześć ${person.firstName}, polecam Ci przeczytać książkę ${book.title}, ma tylko ${book.sites} strony`;
  } else if (person.hasTv) {
    return 'Polecam Ci pójść oglądać TV.';
  } else {
    return 'Nie wiem co Ci zaproponować.';
  }
}
console.log(
  freeTime(
    { firstName: 'Michał', likesBooks: false, hasTv: false },
    { title: '"W pustyni i w puszczy"', sites: 364 }
  )
);


//zadania z live:

// v1 Funkcja przyjmuje 2 parametry age(Number) i isDrunk(Boolean),
//funkcja ma zwrócić wartość Boolean odpowiadając na pytanie czy barman może podać piwo
// Jeżeli osoba ma > 18 lat i nie jest pijana to barman może podać piwo, natomiast jeżeli
//osoba ma mniej niż 18 lat lub jest pijana to barman nie może podać piwa
// isDrunk domyślnie true
// canServeBeer(age, isDrunk)
// canServe = canServeBeer()
// true: "Proszę oto Twoje piwo", false: "Przykro mi, dzisiaj nie dostaniesz piwka"

function canServeBeer(age, isDrunk) {
  if (age < 18 && isDrunk) {
    return "Przykro mi, dzisiaj nie dostaniesz piwka.";
  } else if (age > 18 && isDrunk) {
    return "Przykro mi, dzisiaj nie dostaniesz piwka.";
  } else {
    return "Proszę oto Twoję piwko.";
  }
}
canServe = canServeBeer(21, false);
console.log(canServe);

// v2, zamiast age i isDrunk, funkcja przyjmuje 1 parametr obiektu osoby,
//obiekt ma w sobie wartości age, isDrunk (default value na true), name
// zamiast Boolean zwracamy string Kasiu oto Twoje winko, Kasiu, przykro mi,
//dzisiaj nie ma winka
// const string = canServeBeer(person)

function canServeBeer(person) {
  if (person.age < 18 && person.isDrunk) {
    return `${person.name}, przykro mi, dzisiaj nie ma winka.`;
  } else if (person.age > 18 && person.isDrunk) {
    return `${person.name}, przykro mi, dzisiaj nie ma winka.`;
  } else {
    return `${person.name}, Oto Twoje winko.`;
  }
}
const string = canServeBeer({ name: "Kasiu", age: 21, isDrunk: false });
console.log(string);

