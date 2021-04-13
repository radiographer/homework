const srodkiMyjace = [
  "prszek",
  "plyn do prania",
  "plyn do plukania",
  "proszek kolorowy",
];

const suszarka = ["spadnie", "majtki", "koszulka", "koszulka"];

const brudneUbrania = ["bruden majty", "brudna koszulka", "brudne spodnie"];

function zrobPranie(ubrania, proszek, plyn, program = "sport") {
  console.log("ubrania", ubrania);
  console.log("proszek", proszek);
  console.log("plyn", plyn);
  console.log("program", program);

  const dostepneProgramy = ["sport", "delikatne"];

  if (!ubrania) {
    console.log("Wrzuć ubrania!");
  }

  if (!proszek) {
    console.log("Wrzuć proszek!");
  }

  if (!plyn) {
    console.log("Wrzuć płyn!");
  }

  if (!dostepneProgramy.includes(program)) {
    console.log("Nieznany program");
  }
  return ubrania;
}

const koszNaPranie = zrobPranie(
  brudneUbrania,
  "persil",
  srodkiMyjace[1],
  "szorstkie"
);
console.log(koszNaPranie);
