// Zadanie projekt:

// 3. Dodatkowe funkcjonalności dla chętnych:
// f) Wyświetl w formie listy 10 pierwszych postaci tak aby wyświetlić imie postaci, zdjecie i typ postaci w formie
// opisu czyli musicie uzyć z obiektu postaci: name, image i type.
// g) Wyświetl pod opisem a nad listą dwa przyciski poprzednia i następna, które będą wyświetlały kolejne 10 postaci
// z tablicy lub poprzednie 10, (można to zrobić obcinając tablicę lub używając nowych endpointów z dokumentacji
// pod które mozna podstawiac zmienne i same pobiorą nam dowolną stronę - fetch(<https://rickandmortyapi.com/api/character/?page=1))>
// WAŻNE! Jeśli endpoint zwraca więcej niz 10 postaci to mozecie wyswietlic ich wiecej!
// h) Wyświetl aktualnie na której stronie jesteśmy i ile jest maksymalnie stron w formie string nad przyciskami
// "Aktualna strona to X na X"

let numberPage = 1;
$buttonPrev = document.getElementById("prev");
$buttonNext = document.getElementById("next");

async function main() {
  async function app() {
    const getArray = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${numberPage}`
      );
      const data = await response.json();

      return data.results;
    };

    const tenCharactersFromArray = await getArray();

    const $charEx = document.getElementById("char-ex");
    $charEx.innerHTML = tenCharactersFromArray[0].name;

    console.log("tenCharArr", tenCharactersFromArray);

    function stworzElemnet(data) {
      const $container = document.createElement("div");
      $container.style.borderWidth = "thin";
      $container.style.borderStyle = "solid";
      $container.style.padding = "10px";
      $container.style.margin = "10px";

      const $li = document.createElement("li");
      $li.innerHTML = data.name + " " + data.type;
      const $img = document.createElement("img");
      $img.src = data.image;
      $img.alt = data.name;
      $img.style.height = "50px";
      $img.style.width = "50px";

      $container.appendChild($img);
      $container.appendChild($li);

      const $list = document.getElementById("list-title");

      $list.appendChild($container);
    }
    const element = await getArray();
    element.forEach(stworzElemnet);

    $buttonNext.addEventListener("click", async () => {
      numberPage++;
      const newData = await getArray();
      const $list = document.getElementById("list-title");

      $list.innerHTML = "";
      newData.forEach(stworzElemnet);
      const $current = document.getElementById("current-site");
      $current.innerHTML = numberPage;
    });

    $buttonPrev.addEventListener("click", async () => {
      numberPage--;
      const newData = await getArray();
      const $list = document.getElementById("list-title");

      $list.innerHTML = "";
      newData.forEach(stworzElemnet);
      const $current = document.getElementById("current-site");
      $current.innerHTML = numberPage;
    });

    const getInfoArray = async () => {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/?page=${numberPage}`
      );
      const data = await response.json();
      console.log("data", data);
      return data.info;
    };

    const sites = await getInfoArray();

    const $current = document.getElementById("current-site");
    $current.innerHTML = numberPage;

    const $sitesAll = document.getElementById("sites-number");
    $sitesAll.innerHTML = sites.pages;

    const allCharactersFromArray = await getInfoArray();
    const $listaPostaci = document.getElementById("char-numbers");
    $listaPostaci.innerHTML = allCharactersFromArray.count;
  }

  app();
}

main();
