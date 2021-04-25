// 1.  Napisz funkcję na 2 sposoby, czyli przekazując parametry w formie listy i obiektu, Funkcje powinny dostawać podczas wywołania
//obiekt car(zawierający marke, model, rokProdukcji) i wyświetlić dane o tym aucie w stringu, użyj do tego ``,
//1)
function carChoice(brand, model, yearProd) {
  return `Proponuję Ci samochód marki ${brand}, model ${model}, rok produkcji - ${yearProd}!`;
}

car = {
  brand: "Skoda",
  model: "Octavia",
  yearProd: 2013,
};

console.log(carChoice(car.brand, car.model, car.yearProd));

//2)
function carChoice(obj) {
  return `Proponuję Ci samochód marki ${car.brand}, model ${car.model}, rok produkcji - ${car.yearProd}!`;
}

car = {
  brand: "Skoda",
  model: "Octavia",
  yearProd: 2013,
};

console.log(carChoice(car));

// // 2.  Utworzony w powyższej funkcji obiekt zdestrukturyzuj poza funkcja tak aby można było dostać się do poszczególnych jego wartości,
// // bezpośrednio, zamiast wpisując car.model tylko aby można to było zrobić za pomocą samego model

function carChoice(obj) {
  return `Proponuję Ci samochód marki ${brand}, model ${model}, rok produkcji - ${yearProd}!`;
}

car = {
  brand: "Skoda",
  model: "Octavia",
  yearProd: 2013,
};

const { brand, model, yearProd } = car;

console.log(carChoice(car));

// 3.  Do funkcji w zadaniu pierwszy dodaj destrukturyzację wewnątrz funkcji, na parametrze obiektu i wstaw do stringa odpowiednie
// zmienne już zdestrukturyzowane,

function carChoice(obj) {
  const { brand, model, yearProd } = car;
  return `Proponuję Ci samochód marki ${brand}, model ${model}, rok produkcji - ${yearProd}!`;
}

car = {
  brand: "Skoda",
  model: "Octavia",
  yearProd: 2013,
};

console.log(carChoice(car));

// 4.  Pokaż mi swój przykład i napisz czym się różni inkrementacja z ++ przed zmienna, a ++ po zmiennej czyli let x = 5, ++x OD x++ ?

let x = 10;
console.log(
  "Inkrementacja z plusami PO zmiennej nie zmieniła w tej linii zmienej x=10 i wynosi również",
  x++,
  ","
);
console.log("a dopiero w kolejnej linii, gdzie już zmienna x jest równa:", x);

let y = 10;
console.log(
  "Inkrementacja z plusami PRZED zmienną już zmieniła w tej linii zmienną y=10 i teraz wynosi:",
  ++y
);
console.log("tak samo jak w kolejnej lini, popatrz: y=", y);

// 5.  Napisz funkcję o nazwie kosz, która będzie zawierała w sobie dwie funkcję, rzutZaDwaPkt i rzutZaTrzyPkt oraz stan czyli
// w obiekcie aktualnyWynik, ktory będzie się zaczynał od 0, każda funkcja wewnątrz powinna dodawać odpowiednio 2 i 3 do naszego
// stanu, zwróc z tej funkcji stan i obie funkcje aby móc ich użyć i zrób tak aby aktualnyWynik doszedł do wyniku 7,

function kosz() {
  const aktualnyWynik = {
    ile: 0,
  };
  function rzutZaDwaPkt() {
    aktualnyWynik.ile = aktualnyWynik.ile + 2;
  }
  function rzutZaTrzyPkt() {
    aktualnyWynik.ile = aktualnyWynik.ile + 3;
  }

  function pokazKosz() {
    console.log(aktualnyWynik.ile);
  }

  return {
    aktualnyWynik,
    show: pokazKosz,
    increase2: rzutZaDwaPkt,
    increase3: rzutZaTrzyPkt,
  };
}
const counter = kosz();

counter.increase2();
counter.increase2();
counter.increase3();
counter.show();
console.log(counter);

// 6.  Stwórz obiekt pralka, która zawiera nazwę, liczbę dostępnych funkcji oraz metodę wewnątrz o nazwę
//information która wyświetli
// nam dane o pralce czyli jaki to model i ile ma funkcji dostępnych,

const pralka = {
  name: "Bosh",
  functions: 5,
  information: function () {
    console.log(
      "Pralka firmy",
      this.name,
      "z liczbą dostępnych funkcji równą ",
      this.functions
    );
  },
};
pralka.information();

// 7. Opisz w skrócie na czym polega różnica miedzy kopią, a referencja i stwórz swój własny przykład obrazujący
//tą różnice +
// jakie konkretnie typy danych są typami prostymi a jakie złożonymi?

let string1 = "primitives";
let string2 = string1;
string2 = "primitives after copy and change";

console.log("string1", string1);
console.log("string2", string2);
//zmienia się kopia zmiennej a oryginał pozostaje bez zmian,

let object1 = { nazwaStringu: "refernces" };
let object2 = object1;
object2.nazwaStringu = "references after copy and change ";

console.log("object1", object1.nazwaStringu);
console.log("object2", object2.nazwaStringu);
//zmienia się kopia zmiennej ORAZ oryginał, gdyż obie zmienne odnoszą się do tego samego adresu(referencji),

// TYPY PROSTE:
// liczby 1234....
//stringi 'abcde'
//boolean true false
//null
//undefined

//TYPY ZŁOŻONE:
//tablice []
//funkcje ()
//obiekty {}
