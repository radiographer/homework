import React from "react";
import KartaPostaci from "./KartaPostaci";

function ListaPostaci({ postaci }) {
  return (
    <div>
      <h2>Lista Postaci ({postaci.length})</h2>
      {postaci
        .filter((item, index) => index < 10)
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
