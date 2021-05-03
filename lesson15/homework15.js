// 1.Zwykłe pętle

// Napisz pętle, która:

// a) wyświetli wartości od 1 do 9,
for (i = 1; i <= 9; i++) {
  console.log(i);
}

// b) wyświetli wartości od 9 do 1,
for (i = 9; i >= 1; i--) {
  console.log(i);
}

// c) wyświetli wartości od 5 do 15,
for (i = 5; i <= 15; i++) {
  console.log(i);
}

// d) wyświetli wartości od 0 do -10,
for (i = 0; i >= -10; i--) {
  console.log(i);
}

// e) wyświetli wartości od 1 do 20 zwiększając się co 2 w każdej iteracji,
for (i = 1; i <= 20; i += 2) {
  console.log(i);
}

// f) wyświetli wartości od 10 do -10 zmniejszając się o 4 w każdej iteracji,
for (i = 10; i >= -10; i -= 4) {
  console.log(i);
}

// g) wyświetli wartości od 1 do 100 zwiększając liczbę co iterację mnożąc ją razy 2,
for (i = 1; i <= 10; i++) {
  console.log(i * 2);
}

// 2.Pętle z warunkami

// Napisz pętle, która:
// a) wyświetli wartości od 0 do 20, ale tylko liczby parzyste,
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

// b) wyświetli wartości od 0 do 20, ale tylko liczby nieparzyste,

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 1) {
    console.log(i);
  }
}

// c) wyświetli wartości od 0 do 10, ale tam gdzie jest liczba parzystą pokaże napis liczba parzysta, a tam
//gdzie nie niech wyświetli napis liczba nieparzysta,

for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(`Liczba parzysta ${i}`);
  } else {
    console.log(`Liczba nieparzysta ${i}`);
  }
}
// d) wyświetli liczby od 1 do 30 i tam gdzie liczba jest podzielna tylko przez 3 niech pokaze Fizz,
// tam gdzie przez 5 niech pokaże Buzz, a tam gdzie przez 3 i 5 niech wyświetli FizzBuzz, w reszcie
//przypadków niech pokaże po prostu cyfry,

for (let i = 1; i <= 30; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log(`FizzBuzz ${i}`);
  } else if (i % 3 == 0) {
    console.log(`Fizz ${i}`);
  } else if (i % 5 == 0) {
    console.log(`Buzz ${i}`);
  } else {
    console.log(i);
  }
}

// e) wyświetli liczby od 100 do 0, ale zmniejszając się o 5 co iteracje i jak liczba jest podzielna
//przez 10 to niech doda obok niech napis "- podzielna przez 10",

for (i = 100; i >= 5; i -= 5) {
  if (i % 10 == 0) {
    console.log(`${i} - podzielna przez 10`);
  } else {
    console.log(i);
  }
}

// 3. Pętle w funkcjach

// Napisz funkcje, która:
// a) przyjmuje jako parametr liczbe do której wykona się pętla od 0,

function createLoopWithEnd(condition) {
  for (i = 0; i <= condition; i++) {
    console.log(i);
  }
}
createLoopWithEnd(6);

// b) przyjmuje jako parametr liczbe od której pętla się wykona do 15,

function createLoopWithStart(begin) {
  for (i = begin; i <= 15; i++) {
    console.log(i);
  }
}
createLoopWithStart(6);

// c) przyjmuje jako parametr liczbę wskazującą o ile ma się zwiększać pętla co iteracje i wyświetla taką pętle od 0 do 15,

function createLoopWithStart(x) {
  for (i = 0; i <= 15; i = i + x) {
    console.log(i);
  }
}
createLoopWithStart(2);

// d) przyjmuje dwa parametry, liczbę od której ma się pętla rozpocząć i do jakiej ma trwać,

function createLoopWithStart(start, end) {
  for (i = start; i <= end; i++) {
    console.log(i);
  }
}
createLoopWithStart(2, 12);

// e) przyjmuje trzy argumenty, pierwszy - liczba od której zaczynamy pętle, drugi - liczbę do której pętla ma trwać, trzeci -
// liczbę co ile ma się pętla zwiększać,

function createLoopWithStart(start, end, looping) {
  for (i = start; i <= end; i = i + looping) {
    console.log(i);
  }
}
createLoopWithStart(2, 12, 2);

// 4. Pętle z tablicami

// Napisz funkcje, która:

// a) stwórz tablice 5 elementową i za pomocą pętli wypisz wszystkie jej elementy,

function createTable() {
  tableFive = [1, 2, 3, 4, 5];
  for (i = 0; i < tableFive.length; i++) {
    console.log(tableFive[i]);
  }
}
createTable();

// b) stwórz tablice z kilkoma imionami i wyświetl "Cześć {imie}" za pomocą pętli dla każdego imienia,

function createNamesTable() {
  tableNames = ["Ania", "Marek", "Janek"];
  for (i = 0; i < tableNames.length; i++) {
    console.log(`Cześć ${tableNames[i]}`);
  }
}
createNamesTable();

// c) stwórz tablicę z obiektami, w każdym obiekcie niech będzie model auta i kolor, i wyświetl
//  w stringu "Przed Wami stoi {kolor} {model}",

function createCarsTable() {
  tableCars = [
    { color: "czerwony", model: "Ford Transit" },
    { color: "biały", model: "Fiat Puma" },
  ];

  for (i = 0; i < tableCars.length; i++) {
    console.log(`Przed Wami stoi ${tableCars[i].color} ${tableCars[i].model}`);
  }
}
createCarsTable();

// d) stwórz tablicę z 10 elementami, czyli cyframi od 1 do 10 i niech wyświetli ona tylko liczby parzyste z tej tablicy

function getEvenFromArray() {
  for (let i = 0; i <= tableTenNumbers.length; i++) {
    if (tableTenNumbers[i] % 2 == 0) {
      console.log(tableTenNumbers[i]);
    }
  }
}
tableTenNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getEvenFromArray(tableTenNumbers);

// e) ** stwórz tablice kilku elementową o różnych typach i wyświetl z tablicy tylko te elementy które są stringami,
function createVariousElementsTable() {
  VariousElementsTable = [
    "Kasia",
    { liczba: 1, liczb2: 2, liczba3: 3 },
    3,
    "Robert",
    ["rower", "samochód"],
  ];
  for (i = 0; i < VariousElementsTable.length; i++) {
    //console.log(VariousElementsTable[i] % 1 == 0); //sprawdza czy jest liczba
    //console.log(Array.isArray(VariousElementsTable[i])); //sprawdza czy jest tablica

    if (
      !Array.isArray(VariousElementsTable[i]) &&
      VariousElementsTable[i].length > 0
    ) {
      console.log(VariousElementsTable[i]);
    }
  }
}
createVariousElementsTable();

// f) ** stwórz tablice kilku elementową o różnych typach i wrzuć wszystkie elementy które w tej tablicy są numberami do nowej tablicy,

function getNumbersFromArray() {
  firstArray = [
    "Kasia",
    { liczba: 1, liczb2: 2, liczba3: 3 },
    3,
    "Robert",
    ["rower", "samochód"],
  ];

  secondArray = [];

  for (i = 0; i < firstArray.length; i++) {
    if (firstArray[i] % 1 == 0) {
      secondArray.push(firstArray[i]);
      console.log(secondArray);
    }
  }
}
getNumbersFromArray();

// Napisz funkcję, która:
// a) przyjmuje tablicę liczb jako parametr i liczy sume elementów tej tablicy,
function sumOfArray(array) {
  let sum = 0;
  for (i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }
  return sum;
}
console.log(sumOfArray([1, 2, 888, 43]));

// b) przyjmuje tablicę z numberami i z tego tworzy dwie nowe tablice z liczbami parzystymi i nieparzystymi,

function getNumbersFromArray() {
  for (let i = 0; i < tableNumbers.length; i++) {
    if (tableNumbers[i] % 2 == 0) {
      evenNumbers.push(tableNumbers[i]);
    } else {
      oddNumbers.push(tableNumbers[i]);
    }
  }
}
evenNumbers = [];
oddNumbers = [];
tableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
getNumbersFromArray(tableNumbers);
console.log(evenNumbers);
console.log(oddNumbers);

// c) przyjmuje string jako parametr i jeśli string zawiera w sobie "y" niech wyświetli Jest!, a w inny przypadku Nie ma!
//
//met.1.bez pętli:
//function checkLetterY(variousString) {
//   if (variousString.includes("y")) {
//     console.log(`Jest`);
//   } else {
//     console.log(`Nie ma`);
//   }
// }

// string1 = "myto";
// string2 = "mama";
// checkLetterY(string1);
// checkLetterY(string2);

//met. 2. z pętlą:

const myString = "myto";
const splits = myString.split("");
function checkLetterY(splits) {
  for (let i = 0; i < splits.length; i++) {
    if (splits.includes("y")) {
      console.log(`Jest`);
      return;
    } else {
      console.log(`Nie ma`);
      return;
    }
  }
}
checkLetterY(splits);

// d) przyjmuje liczbę jako parametr i wyświetla wynik mnożenia jej razy cyfry pomniejszone o 1 aż do 1ego, np.
// countResult(4) // 4 * 3 * 2 * 1 = 24

function countResult(number) {
  let result = number;
  for (let i = number - 1; i <= 1; i--) {
    result = result * i;
  }
  return result;
}
function countResult2(number) {
  let result = 1;
  for (let i = number; i <= 1; i--) {
    result = result * number;
  }
  return result;
}
// //
// e) Przyjmuje tablicę jako jeden parametr i string "number" lub "string" jako drugi parametr, w zależności od drugiego parametru niech
// funkcja dodaje do siebie element number lub string do siebie tworząc sumę lub jeden długi string, jeśli drugi parametr nie będzie sie
//zgadzał z "number" lub "string" to niech pokaże odpowiedni komunikat "Drugi parametr jest nieprawidłowy!", dodaj jeszcze zabezpieczenie
// jeśli tablica będzie pusta

function Nazwa(a, b) {
  if (!a.length > 0) {
    console.log("Uwaga, pusta tablica!");
    return;
  }
  if (!Array.isArray(b) && b.length > 0 && a.length > 0) {
    if (Number.isInteger(Number(b))) {
      gotNumber = b * 1;
    } else {
      gotNumber = b;
    }

    let newArray = [];
    for (i = 0; i < a.length; i++) {
      newArray.push(a[i] + gotNumber);
    }

    console.log(newArray);
  } else {
    console.log(`Drugi parametr jest nieprawidłowy!`);
  }
}
numberArray = [1, 2, 3, 4];
stringInput = 2;
Nazwa(numberArray, stringInput);
//
// f) przyjmuje jako parametr tablicę obiektów. W każdym obiekcie powinno znajdować się: name, lastName, hasCar, hasDrivingLicence. Niech będzie
// to tablica z 4 osobami. Stwórz funkcję które przyjmie taką tablicę jako parametr i sprawdzi nam kto ma prawo jazdy i samochód i kto może Cię
// zabrać do domu z imprezy, niech również wyświetli odpowiedni komunikat jeśli ktoś ma prawko ale nie ma auta lub nie ma ani jednego ani drugiego,

function taxi(arrayOfObjects) {
  for (i = 0; i < arrayOfObjects.length; i++) {
    if (arrayOfObjects[i].hasDrivingLicence && arrayOfObjects[i].hasCar) {
      console.log(
        `${arrayOfObjects[i].name} może zabrać bo ma prawko i samochód`
      );
    } else if (
      arrayOfObjects[i].hasDrivingLicence &&
      !arrayOfObjects[i].hasCar
    ) {
      console.log(
        `${arrayOfObjects[i].name} Ma prawko ale nie ma auta i dlatego nie może zabrać`
      );
    } else {
      console.log(
        `${arrayOfObjects[i].name} Nie może zabrać bo nie ma prawka i samochodu`
      );
    }
  }
}
person1 = {
  name: "Michał",
  lastName: "Walczak",
  hasCar: true,
  hasDrivingLicence: true,
};

person2 = {
  name: "Łukasz",
  lastName: "Walczak",
  hasCar: false,
  hasDrivingLicence: false,
};

person3 = {
  name: "Romek",
  lastName: "Walczak",
  hasCar: false,
  hasDrivingLicence: true,
};
taxi([person1, person2, person3]);

// g) przyjmuje jako parametr tablice i nowy element do tablicy. Funkcja ta powinna przeiterować tablice sprawdzając czy
//już taki element w niej jest jeśli go nie ma to dodać do tablicy, a jak jest to wyświetlić odpowiedni komunikat,
// PolubBądź pierwszą osobą, która to polubi

function likeThis(array, newElementToArray) {
  for (i = 0; i < array.length - 1; i++) {
    if (array[i] === newElementToArray) {
      console.log("Polub to!");
    } else {
      array.push(newElementToArray);
      return;
    }
  }
  return array;
}

colorArray = ["black", "red", "yellow"];
newElement = "white";
newElement1 = "black";

likeThis(colorArray, newElement);
likeThis(colorArray, newElement1);
