import React, { useState, useEffect } from "react";
import "./App.css";
import ListaPostaci from "./components/ListaPostaci";

function App() {
  const [postaci, setPostaci] = useState(null);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then(setPostaci);
  }, []);

  if (!postaci) {
    return <div className="App">Brak danych z backandu</div>;
  }
  return (
    <div className="App">
      <ListaPostaci postaci={postaci} />
    </div>
  );
}

export default App;
