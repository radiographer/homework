const queue = [];
const name = "test";

function orderCar(car, carQueue) {
  if (car && car.type) {
    carQueue.push(car);
  }
}

function produceCar(carQueue) {
  if (carQueue.lenght === 0) {
    console.log("Nie ma żadnych zamówień");
    return;
  }
  const car = carQueue.shift();

  car.mirrors = true;
  car.km = 20;
  car.engine = "v8";

  return car;
}

const ford = {
  type: "mustang",
  isDiesel: false,
};

// .push() - dodaje na końcu
// .pop() - odejmuje z końca tablicy
// .shift() - odejmuje z końca tablicy
// .unshift() - dodaje na początku tablicy

const ford2 = {
  type: "mondeo",
  isDiesel: true,
};

console.log("before", queue);
orderCar(ford, queue);
orderCar(ford2, queue);
console.log("after", queue);
const meNewCar = produceCar(queue);
console.log("my new car", meNewCar);
console.log("after production", queue);
