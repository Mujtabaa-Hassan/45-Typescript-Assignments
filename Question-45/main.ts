function makeCar(manufacturer: string, model: string, ...options: [string, any][]){
  let car: any = { manufacturer, model };
  options.forEach(([key, value]) => (car[key] = value));
  return car;
}

console.log(makeCar("Honda", "Civic", ["color", "Black"], ["year", 2024]));
console.log(makeCar("BMW", "M5", ["color", "Black"], ["sunroof", true]));