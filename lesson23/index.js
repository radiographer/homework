//METODA z PROMISAMI
//
//
// fetch("https://rickandmortyapi.com/api/character")
//   .then((response) => response.json())
//   .then((response) => {
//     const lista = document.getElementById("lista");

//     response.results.forEach(({ name }) => {
//       const domElement = document.createElement("div");
//       domElement.innerHTML = name;
//       lista.appendChild(domElement);

//       console.log(name);
//     });
//   });
//
//
//
//
//

//METODA z ASYNC AWAIT
//
//
// async function app() {
//   const pobierzImiona = async () => {
//     const response = await fetch("https://rickandmortyapi.com/api/character");
//     const data = await response.json();
//     console.log("data", data);
//     return data.results.map(({ name }) => name);
//   };
//   const imiona = await pobierzImiona();
//   console.log(imiona);

//   const lista = document.getElementById("lista");

//   imiona.forEach((name) => {
//     const domElement = document.createElement("div");
//     domElement.innerHTML = name;
//     lista.appendChild(domElement);
//   });
// }
// app();

async function app() {
  const pobierzImiona = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log("data", data);
    return data.results.map(({ name }) => name);
  };
  const imiona = await pobierzImiona();
  console.log(imiona);

  const lista = document.getElementById("lista");

  imiona.forEach((name) => {
    const domElement = document.createElement("div");
    domElement.classList = "name"; ///dzieki temu można stylować
    domElement.innerHTML = name;
    lista.appendChild(domElement);
  });
}
app();
