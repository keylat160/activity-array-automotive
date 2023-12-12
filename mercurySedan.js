//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.
//Note: You can code your derived Car class here or make a file named index.js and do it there.
//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Sedan {
    constructor(name, maximumPassenger, passenger, numberOfWheels, maximumSpeed, fuel, scheduleService){
      this.name = initialValue;
      this.maximumPassenger = 5;
      this.passenger = 0;
      this.numberOfWheels = 4;
      this.maximumSpeed = 160;
      this.fuel = 10;
      this.scheduleService = false;
}
loadPassenger() {

}

start() {
    if (this.parameter > 0) {
        return this.started = true;
        console.log("engine started...!!!");
    } else {
        return this.started = false;
        console.log("engine cannot start...");
    }
}

scheduleService() {
   if(this.mileage > 30000) {
      return this.mileage = true;
      console.log("Time for maintenance");
   }  else {
       return this.mileage = false;
       console.log("No need maintenance");
   }
}
}











//TO DO: Creating Instances and Testing Them

//You can use the same instance "v" of the Vehicle class above for the base class.





//Create at least two new instances of the Car class and test them here:
