// Complete the js code
class Car{
 constructor(make,model){
 this.make=make;
	 this.model=model;
 }
	getMakeModel(){
    retrun 'Make is '+this.make +" and model is "+this.model;
}
}

class SportsCar extends Car{
   constructor(make,model,topspeed){
     super(make,model);
	   this.topspeed=topspeed;
   }
	getTopSpeed(){
 return "top speed of car is "+this.topspeed;
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
