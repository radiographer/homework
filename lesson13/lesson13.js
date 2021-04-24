function licznik() {
  const stan = {
    ile: 0,
  };
  function zwieksz() {
    stan.ile = stan.ile + 1;
  }
  function zmniejsz() {
    stan.ile = stan.ile - 1;
  }
  function sekretneDodanie() {
    stan.ile = stan.ile + 10;
  }
  function pokazLicznik() {
    console.log(stan.ile);
  }
  sekretneDodanie();
  return {
    ile: stan.ile, //przekazanie jako typ prosty, czyli kopie         -> liczba
    stan, //przekazanie jako typ złożony,czyli referencje (adres)     -> obiekt
    show: pokazLicznik,
    increase: zwieksz,
    decrease: zmniejsz,
  };
}
const counter = licznik();
counter.show();
counter.decrease();
counter.decrease();
counter.show();
console.log(counter);

const licznikV2 = {
  ile: 0,
  increase: function () {
    licznikV2.ile++;
  },
  decrease() {
    licznikV2.ile -= 1;
  },
  show() {
    console.log(licznikV2.ile);
  },
};

// const licznikV3 = licznikV2
// licznikV3.ile =20   -> przez referncje, czyli jak zmieniamy v2, v3, v4 to zmieniamy wszystko bo jest pod tym samym adresem
const licznikV3 = {
  ...licznikV2, // <----- stworzona kopia, przez stworzenie obiektu z 3 kropkami, a powyzej jak przez referncje to v2=v3
};

licznikV2.increase();
licznikV2.increase();

licznikV2.show();
licznikV3.show();

console.log(licznikV2);
console.log(licznikV3);

const licznikV2 = {
  ile: 0,
  increase: function () {
    this.ile++;
  },
  decrease() {
    this.ile -= 1;
  },
  show() {
    console.log(this.ile);
  },
};

const licznikV3 = {
  ...licznikV2,
};

licznikV2.increase();
licznikV2.increase();

licznikV2.show();
licznikV3.show();

// THIS służy dostać się do obiekty w którym dana funkcja się znajduje
