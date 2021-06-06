// Zadanie projekt:

// 1. Wersja podstawowa:
// a) Stwórz stronę index.html, do której dołączysz plik javascriptowy. W tym pliku pobierz jeszcze raz tablicę postaci
// za pomocą async await,
// b) Z pobranej tablicy stwórz nową tablicę zawierającą pierwsze 10 postaci za pomocą filter lub splice,
// c) Za pomocą flexa, dodaj na górze strony tytuł "Lista Rick and Morty"
// d) Pod tytułem dodaj opis który będzie zawierał informację "Wszystkich dostępnych postaci jest X"(tutaj gdzie X wyswietl
// liczbe wszystkich dostepnych postaci)
// e) Na stronie wyświetl imie przynajmniej jednej postaci z pobranej tablicy,

async function main() {
  async function app() {
    const getArray = async () => {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();

      return data.results.splice(0, 10);
    };
    const tenCharactersFromArray = await getArray();
    const $listaPostaci = document.getElementById("char-numbers");
    $listaPostaci.innerHTML = tenCharactersFromArray.length;

    const $charEx = document.getElementById("char-ex");
    $charEx.innerHTML = tenCharactersFromArray[0].name;

    console.log("tenCharArr", tenCharactersFromArray);
  }

  app();
}

main();
