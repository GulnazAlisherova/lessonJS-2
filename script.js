var vasya = {
  name:"Vasilyi",
  lastName:"Petrovskyi",
  age: 25,
  greet: function(){ //methods
    alert(`Hello, my name is ${this.name}! I am ${this.age} years old.`)
  }
 }
 
 vasya.greet();
 vasya.greet();
 vasya.greet();

//1. Call `greet` method multiple times.
//2. Include age in the greeting.
//3. Try chaging name and age.
//4. Create method `bye`.
