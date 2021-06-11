// endpoint do pobrania wszystkich postaci: https://rickandmortyapi.com/api/character
// metoda do pobrania: fetch()

// Zadania oddzielne:
// 1.  Co oznacza, że kod może być asynchroniczny?


cyt.: Asynchroniczny kod pozwala rozpocząć wykonanie pewnej operacji w danym momencie i obsłużenie jej rezultatu w przyszłości, a w 
międzyczasie skrypt nadal będzie mógł być wykonywany.

// 2.  Pobierz tablicę postaci z powyższego endpointa i wyświetl ją w consoli za pomocą Promise

fetch("https://rickandmortyapi.com/api/character")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  });

// 3.  Dodaj zabezpieczenie do powyższego podpunktu tak aby w przypadku błędu wyświetlić w konsoli napis
// "Ups coś poszło nie tak!", przetestuj to dodając dowolne litery do enpointy aby był nieprawidłowy i sprawdź
// czy napis się wyświetli,

fetch("https://rickandmortyapi.com/api/characsdster")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log("Ups coś poszło nie tak!", err);
  });

// 4.  Zrób to samo co w punkcie 2 ale za pomocą async/await

const pobierzTablice = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  console.log(data);
};

pobierzTablice();

// 5.  Znajdź na stronie The Rick and Morty API jak pobrać pojedyńczą postać i pobierz jedną postać w dowolny sposób,

const pobierzImiona = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character/2");
  const data = await response.json();
  console.log(data);
};
pobierzImiona();
