// const stanAplikacji = {
//   page: 1,
//   info: null,
//   $listaPostaci: document.getElementById("lista"),
// };

// async function main() {
//   $buttonPrev = document.getElementById("prev");
//   $buttonNext = document.getElementById("next");

//   $buttonPrev.addEventListener("click", async (el) => {
//     if (stanAplikacji.info.prev === null) {
//       alert("Jesteś na pierwszej stronie");
//       return;
//     }
//     stanAplikacji.page--;

//     // page=page-1
//     // page -=1
//     // --page

//     const characters = await pobierzPostaci();

//     stanAplikacji.info = characters.info;

//     stanAplikacji.$listaPostaci.innerHTML = "";
//     characters.results.forEach(stworzKartePostaci);
//   });

//   $buttonNext.addEventListener("click", async (el) => {
//     if (stanAplikacji.info.next === null) {
//       alert("Jesteś na ostatniej stronie");
//       return;
//     }
//     stanAplikacji.page++;

//     const characters = await pobierzPostaci();

//     stanAplikacji.info = characters.info;

//     stanAplikacji.$listaPostaci.innerHTML = "";
//     characters.results.forEach(stworzKartePostaci);
//   });

//   async function pobierzPostaci() {
//     const data = await fetch(
//       `https://rickandmortyapi.com/api/character?page=${stanAplikacji.page}`
//     );
//     const response = await data.json();
//     return response;
//   }

//   function stworzKartePostaci(data) {
//     const $card = document.createElement("div");
//     $card.classList = "card";

//     const $img = document.createElement("img");
//     $img.src = data.image;
//     $img.alt = data.name;

//     $card.appendChild($img);

//     const $container = document.createElement("div");
//     $container.classList = "container";

//     const $name = document.createElement("h4");
//     $name.innerHTML = data.name;

//     const $species = document.createElement("p");
//     $species.innerHTML = data.species;

//     $container.appendChild($name);
//     $container.appendChild($species);
//     $card.appendChild($container);

//     const $lista = document.getElementById("lista");
//     $lista.appendChild($card);
//   }

//   const characters = await pobierzPostaci();

//   stanAplikacji.info = characters.info;

//   const $liczbaPostaci = document.getElementById("liczba-postaci");
//   $liczbaPostaci.innerHTML = characters.info.count;

//   characters.results.forEach(stworzKartePostaci);
// }
// main();

// // 50 minuta

//POWYŻEJ JEST KOPIA LESSON24!!!

async function main() {
  async function pobierzDane() {
    const data = await fetch(`https://rickandmortyapi.com/api/character`);
    const json = await data.json();

    return json;
  }

  const dane = await pobierzDane();
  console.log("dane", dane);
}

main();

// PROMISY
// const promise = fetch(`https://rickandmortyapi.com/api/character`);
// promise
//   .then((response) => response.json())
//   .then((json) => console.log("promise json", json))
//   .catch((err) => console.log("error", err));
