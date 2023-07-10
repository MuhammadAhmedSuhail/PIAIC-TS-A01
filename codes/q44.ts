function create_car(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
    const car: { manufacturer: string, model: string, extras: { [key: string]: any } } = {
      manufacturer: manufacturer,
      model: model,
      extras: {}
    };
  
    for (const extra of extras) {
      const key = Object.keys(extra)[0];
      const value = extra[key];
      car.extras[key] = value;
    }
  
    return car;
  }
  
  const myCar = create_car("Toyota", "Camry", { color: "Blue" }, { feature: "Sunroof" });
  console.log(myCar);

  
  export = {}