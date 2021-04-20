function licznik() {
    const stan = {
        ile: 0
    }
    function zwieksz() {
        stan.ile = stan.ile + 1
    }
    function zmniejsz() {
        stan.ile = stan.ile - 1
    }
    function sekretneDodanie() {
        stan.ile = stan.ile + 10
    }
    function pokazLicznik() {
        console.log(stan.ile)
    }
    sekretneDodanie()
    return {
        ile: stan.ile,
        stan,
        show: pokazLicznik,
        increase: zwieksz,
        decrease: zmniejsz,
    }
}
const counter = licznik()
counter.show()
counter.decrease()
counter.decrease()
counter.show()
console.log(counter)