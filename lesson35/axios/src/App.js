import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import axios from "axios";
import "./App.css";
import ListaPostaci from "./components/ListaPostaci";
import HorizontalLinearStepper from "./components/HorizontalLinearStepper";

function App() {
  const [postaci, setPostaci] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3000/characters").then((result) => {
      console.log("result from axios", result);
      setPostaci(result.data);
    });
  }, []);

  const dodajNowaPostac = () => {
    const example = {
      id: 6,
      name: "Mateusz",
      status: "Alive",
      species: "Alien",
      type: "",
      gender: "Male",
      origin: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      location: {
        name: "Earth (Replacement Dimension)",
        url: "https://rickandmortyapi.com/api/location/20",
      },
      image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",

      url: "https://rickandmortyapi.com/api/character/5",
      created: "2017-11-04T19:26:56.301Z",
    };
    // example.species = "human";
    // fetch("http://localhost:3000/characters", {method:"POST"})
    // axios.put("http://localhost:3000/characters/6", example);
    // axios.patch("http://localhost:3000/characters/6", { species: "Alien 4" });
    axios.delete("http://localhost:3000/characters/7");
  };

  if (!postaci) {
    return <div className="App">Brak danych z backandu</div>;
  }

  return (
    <div className="App">
      {/* <Button color="primary" variant="contained" onClick={dodajNowaPostac}>
        Dodaj
      </Button>
      <ListaPostaci postaci={postaci} /> */}
      <HorizontalLinearStepper />
    </div>
  );
}

export default App;
