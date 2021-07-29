import React from "react";
import KartaPostaci from "./KartaPostaci";

function ListaPostaci({ postaci, ilosc, index }) {
  return (
    <div>
      <h2>Lista Postaci ({postaci.info.count})</h2>
      {postaci.results
        .filter((item, index) => index < 5)
        .map(({ name, species, image }, index) => (
          <KartaPostaci
            key={name}
            name={name}
            species={species}
            image={image}
            index={index}
          />
        ))}
    </div>
  );
}

export default ListaPostaci;
