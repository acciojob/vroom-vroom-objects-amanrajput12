// Complete the js code
class Car{
 constructor(make,model){
 this.make=make;
	 this.model=model;
 }
	getMakeModel(){
    return this.make + " " +this.model;
}
}

class SportsCar extends Car{
   constructor(make,model,topSpeed){
     super(make,model);
	   this.topSpeed=topSpeed;
   }
	getTopSpeed(){
 return this.topSpeed;
	}
}


// Create a new SportsCar instance
const car = new SportsCar("Ferrari", "Testarossa", 200);

// Call getMakeModel() to get the make and model of the car
console.log(car.getMakeModel()); // Output: Ferrari Testarossa

// Call getTopSpeed() to get the top speed of the sports car
console.log(car.getTopSpeed()); // Output: 200

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
