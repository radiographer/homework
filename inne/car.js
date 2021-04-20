let samochod = {
  nazwa: "Polonez",
  predkosc: 0,
};

let obslugaAuta = function (auto) {
  function zwiekszPredkosc() {
    auto.predkosc += 1;
    console.log(`Przyspieszasz! Aktualna predkosc ${auto.predkosc} km/h`);
  }

  function zatrzymajPojazd() {
    auto.predkosc = 0;
    console.log(`Zatrzymano pojazd! Aktualna predkosc ${auto.predkosc} km/h`);
  }

  return {
    nazwa: auto.nazwa,
    predkosc: auto.predkosc,
    zwieksz: zwiekszPredkosc,
    zatrzymaj: zatrzymajPojazd,
  };
};

console.log(
  `Przed odpalaniem auto ${samochod.nazwa} miało predkosc ${samochod.predkosc} km/h`
);

obslugaAuta(samochod).zwieksz();
obslugaAuta(samochod).zwieksz();
obslugaAuta(samochod).zwieksz();

obslugaAuta(samochod).zatrzymaj();
